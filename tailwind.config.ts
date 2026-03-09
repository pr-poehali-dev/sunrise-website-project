import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./1772860426534754497.html"
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				cormorant: ['Playfair Display', 'serif'],
				golos: ['Golos Text', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				dawn: {
					night: '#0d0d1a',
					deep: '#1a0a2e',
					purple: '#2d1b4e',
					indigo: '#3d2b6e',
					blue: '#5b4a8a',
					lavender: '#8b7aaa',
					rose: '#c4736a',
					coral: '#e8845c',
					orange: '#f4a04a',
					gold: '#f5c842',
					sun: '#ffd700',
					sky: '#87ceeb',
					light: '#fff5e0',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'sun-rise': {
					'0%': { transform: 'translateY(120%) scale(0.6)', opacity: '0' },
					'30%': { opacity: '1' },
					'100%': { transform: 'translateY(0%) scale(1)', opacity: '1' }
				},
				'sun-glow': {
					'0%, 100%': { boxShadow: '0 0 60px 20px rgba(255,215,0,0.3), 0 0 120px 60px rgba(244,160,74,0.2)' },
					'50%': { boxShadow: '0 0 80px 30px rgba(255,215,0,0.5), 0 0 160px 80px rgba(244,160,74,0.3)' }
				},
				'sky-dawn': {
					'0%': { background: 'linear-gradient(to bottom, #0d0d1a 0%, #1a0a2e 40%, #2d1b4e 70%, #3d2b6e 100%)' },
					'50%': { background: 'linear-gradient(to bottom, #1a0a2e 0%, #3d2b6e 30%, #c4736a 60%, #f4a04a 100%)' },
					'100%': { background: 'linear-gradient(to bottom, #5b4a8a 0%, #87ceeb 40%, #f5c842 70%, #fff5e0 100%)' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'rays-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'horizon-glow': {
					'0%': { opacity: '0', scaleX: '0.3' },
					'100%': { opacity: '1', scaleX: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'sun-rise': 'sun-rise 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards',
				'sun-glow': 'sun-glow 3s ease-in-out infinite',
				'sky-dawn': 'sky-dawn 4s ease-out forwards',
				'fade-up': 'fade-up 0.8s ease-out forwards',
				'rays-spin': 'rays-spin 20s linear infinite',
				'float': 'float 4s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;