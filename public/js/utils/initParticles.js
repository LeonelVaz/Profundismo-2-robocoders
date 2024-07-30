import { particlesConfig } from './particles-config.js';

export function initParticles() {
    if (window.particlesJS) {
        window.particlesJS('particles-js', particlesConfig);
        console.log('particles.js initialized');
    } else {
        console.error('particles.js not loaded');
    }
}