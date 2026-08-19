'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

export function useReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useScrollReveal(options: ScrollRevealOptions = {}) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    delay = 0,
  } = options;

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const setRef = useCallback((node: HTMLElement | null) => {
    elementRef.current = node;
  }, []);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [threshold, rootMargin, triggerOnce, delay]);

  return { ref: setRef, isVisible };
}

export function useStaggeredReveal(itemCount: number, options: ScrollRevealOptions = {}) {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisibleItems(new Array(itemCount).fill(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const delay = options.delay || 50;
          visibleItems.forEach((_, index) => {
            setTimeout(() => {
              setVisibleItems(prev => {
                const next = [...prev];
                next[index] = true;
                return next;
              });
            }, index * delay);
          });
          observer.unobserve(container);
        }
      },
      { threshold: options.threshold || 0.1, rootMargin: options.rootMargin || '0px 0px -50px 0px' }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, [itemCount, options.delay, options.threshold, options.rootMargin, visibleItems]);

  return { ref: containerRef, visibleItems };
}

export function useParallax(speed = 0.5) {
  const [offset, setOffset] = useState(0);
  const elementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > elementTop && scrolled < elementTop + elementHeight) {
        const distance = (scrolled + windowHeight - elementTop) / (windowHeight + elementHeight);
        setOffset(distance * 100 * speed);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref: elementRef, offset };
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
}

export function useSpringValue(initialValue = 0, stiffness = 100, damping = 10) {
  const [value, setValue] = useState(initialValue);
  const targetRef = useRef(initialValue);
  const velocityRef = useRef(0);
  const frameRef = useRef<number>();

  const animate = useCallback((target: number) => {
    targetRef.current = target;
    
    const step = () => {
      const distance = targetRef.current - value;
      velocityRef.current += distance * (stiffness / 1000);
      velocityRef.current *= damping / 10;
      
      const newValue = value + velocityRef.current;
      setValue(newValue);
      
      if (Math.abs(targetRef.current - newValue) > 0.01 || Math.abs(velocityRef.current) > 0.01) {
        frameRef.current = requestAnimationFrame(step);
      }
    };
    
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => step());
  }, [value, stiffness, damping]);

  return [value, animate] as const;
}