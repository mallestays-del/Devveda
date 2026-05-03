'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BarChart3,
  Database,
  Users,
  Briefcase,
  Trophy,
  Building2,
  Phone,
  Mail,
  CheckCircle2,
  Target,
  Rocket,
  ShieldCheck,
  Award,
  Star,
  ArrowRight,
  Linkedin,
  Instagram,
  Menu,
  X,
  Clock,
  IndianRupee,
  MessageCircle,
  GraduationCap,
  ClipboardCheck,
  Lightbulb,
  Quote,
  CalendarCheck,
  TrendingUp,
} from 'lucide-react'

const LOGO = 'https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png'
const HERO_IMG = 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?w=1400&q=85'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1599585113438-291af1a8d1db?w=1200&q=85'
const DASH_IMG = 'https://images.unsplash.com/photo-1660020619062-70b16c44bf0f?w=1200&q=85'

const CONTACT = {
  phone: '+91 85118 90947',
  phoneRaw: '+918511890947',
  email: 'vyomacademyy@gmail.com',
  instagram: 'https://www.instagram.com/vyoma_cademy',
  linkedin: 'https://www.linkedin.com/in/vyom-academy-29962b275',
  whatsapp: 'https://wa.me/918511890947',
}

const courses = [
  { icon: BarChart3, title: 'Business Analysis Fundamentals', desc: 'Requirements gathering, BRD/FRD, stakeholder management, gap analysis & domain knowledge.' },
  { icon: Database, title: 'SQL & Databases', desc: 'Master SQL queries, joins, sub-queries, and database design used in real BA projects.' },
  { icon: Building2, title: 'Domain Training', desc: 'Functional understanding across BFSI, Healthcare, Retail and E-commerce industries.' },
  { icon: BarChart3, title: 'Advanced Excel', desc: 'Pivot tables, VLOOKUP, Power Query, dashboards and what-if analysis.' },
  { icon: Rocket, title: 'Agile & Scrum', desc: 'User stories, JIRA, sprints, backlog grooming and Scrum ceremonies.' },
  { icon: Briefcase, title: 'Real-Time Projects', desc: '4+ industry case studies across BFSI, Healthcare, Retail and E-commerce domains.' },
]

const whyUs = [
  { icon: Users, title: 'Fortune 500 Mentors', desc: '10+ years of corporate BA experience from leading global firms.' },
  { icon: Target, title: 'Hands-On Projects', desc: 'Live capstone projects mirroring real client requirements and workflows.' },
  { icon: Award, title: 'Resume & Interview Prep', desc: 'Mock interviews, profile building & LinkedIn optimization by hiring managers.' },
  { icon: ShieldCheck, title: 'Dedicated Placement Cell', desc: 'Personalized career guidance and ongoing support until you land your role.' },
]

const journey = [
  { step: '01', icon: ClipboardCheck, title: 'Enroll & Onboard', desc: 'Personalized counseling session followed by program induction and learning plan.' },
  { step: '02', icon: Lightbulb, title: 'Learn & Practice', desc: 'Live mentor-led sessions, weekly assignments and curated study material.' },
  { step: '03', icon: Briefcase, title: 'Build Real Projects', desc: 'Apply concepts to industry case studies across BFSI, Healthcare and Retail.' },
  { step: '04', icon: TrendingUp, title: 'Get Placed', desc: 'Resume reviews, mock interviews and 1-on-1 mentoring until you land your role.' },
]

const careers = [
  { role: 'Business Analyst', salary: '6 – 12 LPA', icon: Briefcase },
  { role: 'Data Analyst', salary: '5 – 10 LPA', icon: BarChart3 },
  { role: 'Product Analyst', salary: '7 – 14 LPA', icon: Target },
  { role: 'Functional Consultant', salary: '8 – 16 LPA', icon: Trophy },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Business Analyst, Deloitte',
    text: 'Vyom Academy completely transformed my career. The hands-on projects and mock interviews gave me the confidence to crack my dream job within 2 months of completing the course.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Rahul Verma',
    role: 'Data Analyst, TCS',
    text: 'Coming from a non-IT background, I was nervous. The mentors patiently explained every concept with real-world examples. I now lead analytics for a retail vertical.',
    rating: 5,
    initials: 'RV',
  },
  {
    name: 'Anjali Mehta',
    role: 'Product Analyst, Flipkart',
    text: 'The placement cell is phenomenal. They prepared me end-to-end — resume, LinkedIn, mock interviews. I received three offers within three weeks.',
    rating: 5,
    initials: 'AM',
  },
]

const faqs = [
  { q: 'Do I need a technical background to join the BA course?', a: 'Not at all. Our curriculum is designed for both technical and non-technical learners. We start from the basics and gradually build advanced skills.' },
  { q: 'What is the duration of the Business Analyst course?', a: 'Our flagship BA program runs for 1 month with weekday batches and 2 months with weekend batch options. We also offer a fast-track 2-week intensive cohort.' },
  { q: 'Will I get a certificate after completion?', a: 'Yes. Upon successful completion, you will receive an industry-recognized Vyom Academy Business Analyst certificate to showcase your skills to employers.' },
  { q: 'How does placement assistance work?', a: 'After course completion, you receive comprehensive placement support including mock interviews, resume reviews, and 1-on-1 career mentoring — guiding you every step of the way until you land your dream BA role.' },
  { q: 'Can I attend a free demo before enrolling?', a: 'Absolutely. Book a free live demo session with our senior mentor to experience the teaching style and curriculum firsthand.' },
]

const stats = [
  { value: '1,000+', label: 'Students Trained' },
  { value: '95%', label: 'Placement Rate' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '4.9', label: 'Average Rating', suffix: '★' },
]

const hiringPartners = ['Deloitte', 'Accenture', 'TCS', 'Infosys', 'Capgemini', 'Wipro', 'Cognizant', 'IBM', 'EY', 'KPMG']

/* ------------------------------- Lead Form ------------------------------- */
function LeadForm({ source = 'hero', compact = false, onDone }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      const msg =
        `*New Demo Booking - Vyom Academy*%0A%0A` +
        `*Name:* ${encodeURIComponent(form.name)}%0A` +
        `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
        `*Email:* ${encodeURIComponent(form.email)}%0A` +
        (form.message ? `*Message:* ${encodeURIComponent(form.message)}%0A` : '') +
        `*Source:* ${encodeURIComponent(source)}%0A` +
        `*Time:* ${encodeURIComponent(new Date().toLocaleString('en-IN'))}`
      const waUrl = `https://wa.me/918511890947?text=${msg}`
      window.open(waUrl, '_blank', 'noopener,noreferrer')

      setStatus('success')
      setForm({ name: '', email: '', phone: '', message: '' })
      onDone?.()
    } catch (err) {
      setStatus('error')
      setError(err.message)
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto mb-2" />
        <h4 className="font-semibold text-emerald-900">Almost there! WhatsApp opened in a new tab.</h4>
        <p className="text-sm text-emerald-700 mt-1">Just tap <strong>Send</strong> in WhatsApp to confirm your demo booking. Our counselor will reach out within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor={`name-${source}`} className="text-xs uppercase tracking-wider text-navy-700 font-semibold">Full Name *</Label>
          <Input id={`name-${source}`} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="mt-1.5 border-slate-300 focus-visible:ring-gold-500 focus-visible:ring-offset-0 h-11" />
        </div>
        <div>
          <Label htmlFor={`phone-${source}`} className="text-xs uppercase tracking-wider text-navy-700 font-semibold">Phone *</Label>
          <Input id={`phone-${source}`} required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="mt-1.5 border-slate-300 focus-visible:ring-gold-500 focus-visible:ring-offset-0 h-11" />
        </div>
      </div>
      <div>
        <Label htmlFor={`email-${source}`} className="text-xs uppercase tracking-wider text-navy-700 font-semibold">Email *</Label>
        <Input id={`email-${source}`} type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-1.5 border-slate-300 focus-visible:ring-gold-500 focus-visible:ring-offset-0 h-11" />
      </div>
      {!compact && (
        <div>
          <Label htmlFor={`msg-${source}`} className="text-xs uppercase tracking-wider text-navy-700 font-semibold">Message (optional)</Label>
          <Textarea id={`msg-${source}`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your background or any questions" className="mt-1.5 border-slate-300 focus-visible:ring-gold-500 focus-visible:ring-offset-0" rows={3} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={status === 'loading'} className="w-full bg-navy-900 hover:bg-navy-800 text-white h-12 text-base font-semibold tracking-wide group">
        {status === 'loading' ? 'Submitting...' : 'Book Free Demo'}
        {status !== 'loading' && <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
      </Button>
      <p className="text-xs text-slate-500 text-center">By submitting, you agree to be contacted by Vyom Academy.</p>
    </form>
  )
}

/* ------------------------------ Section Eyebrow ------------------------- */
const Eyebrow = ({ children }) => (
  <div className="inline-flex items-center gap-2 mb-5">
    <span className="h-px w-8 bg-gold-500" />
    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">{children}</span>
    <span className="h-px w-8 bg-gold-500" />
  </div>
)

const SectionHeader = ({ eyebrow, title, subtitle, center = true, light = false }) => (
  <div className={center ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}>
    {eyebrow && (
      <div className={`inline-flex items-center gap-2 mb-5 ${center ? '' : ''}`}>
        <span className="h-px w-8 bg-gold-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">{eyebrow}</span>
        {center && <span className="h-px w-8 bg-gold-500" />}
      </div>
    )}
    <h2 className={`font-serif text-3xl md:text-4xl lg:text-[44px] font-semibold leading-[1.15] ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
    {subtitle && <p className={`mt-5 text-base md:text-lg leading-relaxed ${light ? 'text-navy-100' : 'text-slate-600'}`}>{subtitle}</p>}
  </div>
)

/* --------------------------------- App ---------------------------------- */
const App = () => {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setNavOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const navLinks = [
    ['About', 'about'],
    ['Curriculum', 'courses'],
    ['Why Us', 'why'],
    ['Journey', 'journey'],
    ['Careers', 'careers'],
    ['Stories', 'testimonials'],
    ['FAQ', 'faq'],
  ]

  return (
    <div className="min-h-screen bg-white text-navy-900">
      {/* TOP STRIP */}
      <div className="hidden md:block bg-navy-950 text-navy-100 text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-1.5 hover:text-gold-400 transition">
              <Phone className="w-3 h-3" /> {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-1.5 hover:text-gold-400 transition">
              <Mail className="w-3 h-3" /> {CONTACT.email}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden lg:inline text-gold-400 font-medium tracking-wide">New Batch · Limited Seats Available</span>
            <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-gold-400 transition"><Linkedin className="w-3.5 h-3.5" /></a>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-gold-400 transition"><Instagram className="w-3.5 h-3.5" /></a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-gold-400 transition"><MessageCircle className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* NAV */}
      <header className={`sticky top-0 z-50 transition-all ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(11,20,55,0.15)] border-b border-slate-100' : 'bg-white border-b border-slate-100'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top') }} className="flex items-center gap-3.5 group">
            <div className="relative">
              <img src={LOGO} alt="Vyom Academy logo" className="w-16 h-16 object-contain transition-transform group-hover:scale-105" />
            </div>
            <div className="leading-tight">
              <div className="font-serif text-xl font-semibold text-navy-900 tracking-tight">Vyom Academy</div>
              <div className="text-[11px] text-gold-600 font-medium tracking-[0.18em] uppercase">Bridge Business &amp; Technology</div>
            </div>
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-[13px] font-medium text-navy-700">
            {navLinks.map(([l, id]) => (
              <li key={id}>
                <button onClick={() => scrollTo(id)} className="relative py-2 hover:text-navy-900 transition group">
                  {l}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </button>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            <button onClick={() => scrollTo('contact')} className="text-sm font-semibold text-navy-900 hover:text-gold-600 transition">Book Demo</button>
            <Button onClick={() => scrollTo('contact')} className="bg-navy-900 hover:bg-navy-800 text-white rounded-none h-11 px-6 text-sm font-semibold tracking-wide group">
              Enroll Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <button className="lg:hidden p-2 text-navy-900" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {navOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-4">
            <ul className="space-y-1 text-sm font-medium">
              {navLinks.map(([l, id]) => (
                <li key={id}><button onClick={() => scrollTo(id)} className="w-full text-left py-2.5 text-navy-800 hover:text-gold-600">{l}</button></li>
              ))}
              <li className="pt-2"><Button onClick={() => scrollTo('contact')} className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-none h-11">Enroll Now</Button></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_25%_30%,#D4AF50_0%,transparent_45%),radial-gradient(circle_at_75%_70%,#5B6CA1_0%,transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-7">
              <span className="h-px w-10 bg-gold-500" />
              <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Premier BA Training Institute</span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-tight">
              Become a <span className="italic text-gold-400">Job-Ready</span><br />
              Business Analyst
            </h1>
            <div className="mt-6 h-px w-16 bg-gold-500" />
            <p className="mt-6 text-lg text-navy-100 max-w-xl leading-relaxed">
              Industry-focused training led by Fortune 500 mentors. Master real-world BA tools, work on live projects, and launch your high-paying career in just <span className="text-gold-400 font-semibold">1–2 months</span> — no prior tech background required.
            </p>
            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollTo('contact')} className="bg-gold-500 hover:bg-gold-400 text-navy-950 h-12 text-[15px] px-8 font-semibold tracking-wide rounded-none group">
                Enroll Now <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button onClick={() => scrollTo('contact')} variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent h-12 text-[15px] px-8 rounded-none font-medium">
                Book Free Demo
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-xl">
              <div>
                <div className="font-serif text-3xl font-semibold text-gold-400">1,000<span className="text-xl">+</span></div>
                <div className="text-[11px] text-navy-200 uppercase tracking-[0.18em] mt-1">Alumni Placed</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-gold-400">95<span className="text-xl">%</span></div>
                <div className="text-[11px] text-navy-200 uppercase tracking-[0.18em] mt-1">Placement Rate</div>
              </div>
              <div>
                <div className="font-serif text-3xl font-semibold text-gold-400">4.9<span className="text-xl">★</span></div>
                <div className="text-[11px] text-navy-200 uppercase tracking-[0.18em] mt-1">Student Rating</div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-3 border border-gold-500/40 hidden md:block" />
            <div className="relative overflow-hidden">
              <img src={HERO_IMG} alt="Business analyst presenting data charts" className="w-full h-[420px] lg:h-[540px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy-950/60 via-navy-950/10 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:flex bg-white text-navy-900 shadow-2xl py-4 px-5 items-center gap-4 border-l-4 border-gold-500">
              <Trophy className="w-7 h-7 text-gold-600" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Avg. Salary Hike</div>
                <div className="font-serif text-2xl font-semibold">120%</div>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 hidden md:flex bg-white text-navy-900 shadow-2xl py-4 px-5 items-center gap-4 border-l-4 border-navy-900">
              <Users className="w-7 h-7 text-navy-700" />
              <div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">Placed In</div>
                <div className="font-serif text-base font-semibold">Fortune 500 MNCs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HIRING PARTNERS */}
      <section className="bg-cream border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-gold-500" />
              <p className="text-[11px] uppercase tracking-[0.28em] text-navy-700 font-semibold">Our Alumni Work At</p>
              <span className="h-px w-10 bg-gold-500" />
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5">
            {hiringPartners.map((c) => (
              <span key={c} className="font-serif text-xl md:text-2xl text-navy-700/60 hover:text-navy-900 transition tracking-wide">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="absolute -inset-3 border border-gold-500/30 hidden md:block" />
            <img src={ABOUT_IMG} alt="Vyom Academy training session" className="relative w-full h-[460px] object-cover" />
            <div className="absolute -bottom-8 -right-8 bg-navy-900 text-white py-7 px-8 shadow-2xl hidden md:block border-l-4 border-gold-500">
              <div className="font-serif text-4xl font-semibold text-gold-400">10+</div>
              <div className="text-xs uppercase tracking-[0.2em] text-navy-100 mt-1">Years of Excellence</div>
            </div>
          </div>
          <div>
            <SectionHeader
              eyebrow="About Vyom Academy"
              title={<>India&apos;s Most Trusted<br /><span className="italic text-navy-700">Business Analysis Institute</span></>}
              center={false}
            />
            <p className="mt-6 text-slate-600 leading-relaxed text-base md:text-lg">
              At <strong className="text-navy-900">Vyom Academy</strong>, we transform aspiring professionals into confident, industry-ready Business Analysts. With <strong className="text-navy-900">10+ years of training excellence</strong>, our curriculum is engineered by senior BA leaders from global Fortune 500 companies.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                'Real-world skills taught through live projects',
                'Industry-certified expert trainers with 10+ years experience',
                'Industry-recognized course completion certificate',
                'Dedicated placement support with personalized interview guidance',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-gold-100 grid place-items-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-700" />
                  </div>
                  <span className="text-slate-700 leading-relaxed">{p}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollTo('contact')} className="mt-10 bg-navy-900 hover:bg-navy-800 text-white rounded-none h-12 px-7 group">
              Talk to a Counselor <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section className="bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,80,0.08),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-2 lg:grid-cols-4 gap-y-8 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={s.label} className={`text-center px-6 ${i === 0 ? 'border-l-0' : ''}`}>
              <div className="font-serif text-4xl md:text-5xl font-semibold text-gold-400">
                {s.value}
                {s.suffix && <span className="text-2xl md:text-3xl">{s.suffix}</span>}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.22em] text-navy-100">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES / CURRICULUM */}
      <section id="courses" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Curriculum"
            title={<>Everything You Need to <span className="italic">Master</span> Business Analysis</>}
            subtitle="A comprehensive curriculum covering the tools, techniques and real business scenarios — fully aligned with current industry hiring trends."
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((c, i) => (
              <Card key={c.title} className="group bg-white border-slate-200/70 hover:border-gold-500/60 hover:shadow-2xl hover:shadow-navy-900/10 transition-all duration-500 rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <CardContent className="p-7">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 bg-navy-50 grid place-items-center group-hover:bg-navy-900 transition-colors duration-500">
                      <c.icon className="w-6 h-6 text-navy-700 group-hover:text-gold-400 transition-colors duration-500" />
                    </div>
                    <span className="font-serif text-2xl text-gold-500/40 group-hover:text-gold-500 transition">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="mt-6 font-serif text-xl font-semibold text-navy-900 leading-snug">{c.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-2.5 text-sm">
            <span className="text-xs uppercase tracking-[0.18em] text-navy-700 font-semibold w-full text-center mb-3">Tools &amp; Technologies You&apos;ll Master</span>
            {['Excel', 'SQL', 'JIRA', 'Confluence', 'Domain Knowledge', 'Agile', 'Scrum'].map((t) => (
              <span key={t} className="px-4 py-2 bg-white border border-slate-200 text-navy-800 font-medium tracking-wide hover:border-gold-500 hover:text-navy-900 transition">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose Us"
            title={<>More Than Training — A <span className="italic">Career Partnership</span></>}
            subtitle="We invest in your career outcomes, not just your training. Here's what sets Vyom Academy apart."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-slate-200">
            {whyUs.map((w, i) => (
              <div key={w.title} className={`group relative p-8 bg-white hover:bg-navy-900 transition-all duration-500 ${i < whyUs.length - 1 ? 'lg:border-r border-slate-200' : ''} ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < 2 ? 'sm:border-b lg:border-b-0' : ''} border-slate-200`}>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 bg-navy-50 group-hover:bg-gold-500/20 grid place-items-center transition-colors">
                    <w.icon className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition-colors" />
                  </div>
                  <span className="font-serif text-3xl text-slate-200 group-hover:text-gold-400/30 transition">0{i + 1}</span>
                </div>
                <h3 className="mt-7 font-serif text-lg font-semibold text-navy-900 group-hover:text-white transition leading-snug">{w.title}</h3>
                <p className="mt-3 text-sm text-slate-600 group-hover:text-navy-100 transition leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="py-20 lg:py-28 bg-cream relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Your Journey"
            title={<>From Aspirant to <span className="italic">Industry-Ready</span> BA</>}
            subtitle="A proven, structured path designed to take you from the first counseling call to your first day on the job."
          />
          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-px border-t-2 border-dashed border-gold-500/40" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
              {journey.map((j) => (
                <div key={j.step} className="relative group">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative z-10 w-24 h-24 bg-white border-2 border-gold-500 grid place-items-center group-hover:bg-navy-900 group-hover:border-navy-900 transition-all duration-500 shadow-lg">
                      <j.icon className="w-9 h-9 text-navy-800 group-hover:text-gold-400 transition" />
                    </div>
                    <div className="mt-5 font-serif text-xs tracking-[0.3em] text-gold-600 font-semibold">STEP {j.step}</div>
                    <h3 className="mt-2 font-serif text-xl font-semibold text-navy-900">{j.title}</h3>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-[260px]">{j.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER OUTCOMES */}
      <section id="careers" className="py-20 lg:py-28 relative overflow-hidden bg-navy-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(212,175,80,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Career Outcomes"
                title={<>Unlock High-Paying Roles<br /><span className="italic text-gold-400">Across Top Industries</span></>}
                center={false}
                light
              />
              <p className="mt-6 text-navy-100 text-base md:text-lg leading-relaxed">
                Our graduates are working at leading MNCs across BFSI, Healthcare, Retail, IT and Consulting domains — earning competitive packages from day one.
              </p>
              <div className="mt-8 relative hidden lg:block">
                <div className="absolute -inset-2 border border-gold-500/30" />
                <img src={DASH_IMG} alt="Analytics dashboard" className="relative w-full rounded-none shadow-2xl" />
              </div>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
              {careers.map((c) => (
                <Card key={c.role} className="bg-white/[0.04] backdrop-blur-sm border border-white/10 hover:border-gold-500/60 hover:bg-white/[0.07] transition-all rounded-none group">
                  <CardContent className="p-7">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 bg-gold-500/15 grid place-items-center group-hover:bg-gold-500/25 transition-colors">
                        <c.icon className="w-5 h-5 text-gold-400" />
                      </div>
                      <span className="font-serif text-xs uppercase tracking-[0.2em] text-navy-200">Avg. CTC</span>
                    </div>
                    <h3 className="mt-6 font-serif text-xl font-semibold text-white">{c.role}</h3>
                    <div className="mt-3 flex items-baseline gap-1 text-gold-400">
                      <IndianRupee className="w-5 h-5" />
                      <span className="font-serif text-2xl font-semibold">{c.salary}</span>
                    </div>
                    <p className="mt-1 text-xs text-navy-200">Annual package range</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Student Stories"
            title={<>Real Stories. <span className="italic">Real Careers.</span></>}
            subtitle="Hear from our alumni on how Vyom Academy transformed their career trajectories."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative bg-cream border-slate-200/60 rounded-none p-1 hover:shadow-xl hover:shadow-navy-900/10 transition-shadow duration-500">
                <CardContent className="p-7 bg-white relative">
                  <Quote className="absolute top-5 right-5 w-10 h-10 text-gold-500/20" />
                  <div className="flex gap-1 text-gold-500">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-5 text-slate-700 leading-relaxed text-[15px] italic">&ldquo;{t.text}&rdquo;</p>
                  <div className="mt-7 pt-5 border-t border-slate-100 flex items-center gap-3.5">
                    <div className="w-12 h-12 bg-navy-900 text-gold-400 grid place-items-center font-serif font-semibold text-lg">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-serif font-semibold text-navy-900">{t.name}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-navy-900 p-10 lg:p-16 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,80,0.15),transparent_60%)]" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="h-px w-10 bg-gold-500" />
                <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">Limited Seats</span>
                <span className="h-px w-10 bg-gold-500" />
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-semibold text-white leading-[1.1]">
                Start Your Career in<br />
                <span className="italic text-gold-400">Business Analysis</span> Today
              </h2>
              <p className="mt-6 text-navy-100 text-base md:text-lg max-w-2xl mx-auto">Join 1,000+ alumni who launched their dream BA careers with Vyom Academy.</p>
              <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => scrollTo('contact')} className="bg-gold-500 hover:bg-gold-400 text-navy-950 h-12 text-[15px] px-8 font-semibold tracking-wide rounded-none group">
                  Reserve My Seat <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button asChild variant="outline" className="border-white/30 text-white bg-transparent hover:bg-white/10 hover:text-white h-12 text-[15px] px-8 rounded-none">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-sm text-navy-100">
                <span className="flex items-center gap-2"><CalendarCheck className="w-4 h-4 text-gold-400" /> Next batch starts in 7 days</span>
                <span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-gold-400" /> Dedicated Placement Support</span>
                <span className="flex items-center gap-2"><Award className="w-4 h-4 text-gold-400" /> Industry Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title={<>Frequently Asked <span className="italic">Questions</span></>}
            subtitle="Everything you need to know before enrolling."
          />
          <Accordion type="single" collapsible className="mt-12 bg-white border border-slate-200/70 px-2 md:px-6 divide-y divide-slate-200/70">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0">
                <AccordionTrigger className="text-left font-serif font-semibold text-navy-900 text-base md:text-lg hover:no-underline py-5 hover:text-gold-700">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed pb-5 text-[15px]">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Get In Touch"
              title={<>Have Questions?<br /><span className="italic">We&apos;re Here to Help.</span></>}
              center={false}
            />
            <p className="mt-5 text-slate-600 text-base md:text-lg leading-relaxed">Speak to our admissions team for course details, fees, batch schedules and personalized career guidance.</p>
            <div className="mt-10 space-y-5">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-4 group p-4 -mx-4 hover:bg-cream transition">
                <div className="w-12 h-12 bg-navy-50 grid place-items-center group-hover:bg-navy-900 transition">
                  <Phone className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition" />
                </div>
                <div>
                  <div className="text-[10px] text-gold-600 uppercase tracking-[0.22em] font-semibold">Call Us</div>
                  <div className="font-serif text-lg font-semibold text-navy-900 mt-0.5">{CONTACT.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group p-4 -mx-4 hover:bg-cream transition">
                <div className="w-12 h-12 bg-navy-50 grid place-items-center group-hover:bg-navy-900 transition">
                  <Mail className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition" />
                </div>
                <div>
                  <div className="text-[10px] text-gold-600 uppercase tracking-[0.22em] font-semibold">Email Us</div>
                  <div className="font-serif text-lg font-semibold text-navy-900 mt-0.5">{CONTACT.email}</div>
                </div>
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 -mx-4 hover:bg-cream transition">
                <div className="w-12 h-12 bg-navy-50 grid place-items-center group-hover:bg-navy-900 transition">
                  <MessageCircle className="w-5 h-5 text-navy-700 group-hover:text-gold-400 transition" />
                </div>
                <div>
                  <div className="text-[10px] text-gold-600 uppercase tracking-[0.22em] font-semibold">WhatsApp</div>
                  <div className="font-serif text-lg font-semibold text-navy-900 mt-0.5">Chat with us instantly</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 -mx-4">
                <div className="w-12 h-12 bg-navy-50 grid place-items-center">
                  <Instagram className="w-5 h-5 text-navy-700" />
                </div>
                <div>
                  <div className="text-[10px] text-gold-600 uppercase tracking-[0.22em] font-semibold">Follow Us</div>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="font-serif text-lg font-semibold text-navy-900 hover:text-gold-700 mt-0.5 block">@vyoma_cademy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <Card className="border border-slate-200 shadow-2xl shadow-navy-900/5 rounded-none relative">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gold-500" />
              <CardContent className="p-7 md:p-10">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="h-px w-8 bg-gold-500" />
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">Free Consultation</span>
                </div>
                <h3 className="font-serif text-3xl font-semibold text-navy-900">Book Your Free Demo</h3>
                <p className="mt-2 text-slate-600">Fill in your details and our admissions counselor will call within 24 hours.</p>
                <div className="mt-7">
                  <LeadForm source="contact-form" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-950 text-navy-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <div className="flex items-center gap-3.5">
                <img src={LOGO} alt="Vyom Academy" className="w-16 h-16 object-contain bg-white p-1.5" />
                <div>
                  <div className="font-serif text-xl font-semibold text-white">Vyom Academy</div>
                  <div className="text-[11px] text-gold-400 tracking-[0.18em] uppercase font-medium">Bridge Business &amp; Technology</div>
                </div>
              </div>
              <p className="mt-6 text-sm text-navy-100/80 max-w-md leading-relaxed">India&apos;s most trusted Business Analyst Training Institute. Empowering 1,000+ professionals to launch successful BA careers with Fortune 500 mentors.</p>
              <div className="mt-7 flex gap-2.5">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 border border-white/15 hover:border-gold-500 hover:text-gold-400 grid place-items-center transition">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 border border-white/15 hover:border-gold-500 hover:text-gold-400 grid place-items-center transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="w-10 h-10 border border-white/15 hover:border-gold-500 hover:text-gold-400 grid place-items-center transition">
                  <Mail className="w-4 h-4" />
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 border border-white/15 hover:border-gold-500 hover:text-gold-400 grid place-items-center transition">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold-400 font-semibold mb-5">Explore</h4>
              <ul className="space-y-3 text-sm">
                {navLinks.map(([l, id]) => (
                  <li key={id}><button onClick={() => scrollTo(id)} className="text-navy-100/80 hover:text-gold-400 transition">{l}</button></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-4">
              <h4 className="text-[11px] uppercase tracking-[0.22em] text-gold-400 font-semibold mb-5">Get In Touch</h4>
              <ul className="space-y-3 text-sm text-navy-100/80">
                <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" /> <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-gold-400 transition">{CONTACT.phone}</a></li>
                <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" /> <a href={`mailto:${CONTACT.email}`} className="hover:text-gold-400 transition break-all">{CONTACT.email}</a></li>
                <li className="flex items-start gap-2.5"><Instagram className="w-4 h-4 mt-0.5 text-gold-500 flex-shrink-0" /> <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition">@vyoma_cademy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-14 pt-7 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-navy-100/60">
            <p>© {new Date().getFullYear()} Vyom Academy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/30 transition-all hover:scale-105 group"
      >
        <span className="w-14 h-14 grid place-items-center">
          <MessageCircle className="w-6 h-6" />
        </span>
        <span className="hidden md:inline pr-5 font-semibold text-sm tracking-wide">Chat with us</span>
      </a>
    </div>
  )
}

export default App
