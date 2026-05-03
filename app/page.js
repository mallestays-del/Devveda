'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BarChart3,
  Database,
  PieChart,
  Users,
  Briefcase,
  Trophy,
  Building2,
  Phone,
  Mail,
  CheckCircle2,
  Sparkles,
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
} from 'lucide-react'

const LOGO = 'https://customer-assets.emergentagent.com/job_business-analyst-hub-6/artifacts/uo20v9aw_image.png'
const HERO_IMG = 'https://images.unsplash.com/photo-1698306642516-9841228dcff3?w=1400&q=85'
const ABOUT_IMG = 'https://images.unsplash.com/photo-1599585113438-291af1a8d1db?w=1200&q=85'
const DASH_IMG = 'https://images.unsplash.com/photo-1660020619062-70b16c44bf0f?w=1200&q=85'
const CORP_IMG = 'https://images.unsplash.com/photo-1718375505849-617bc3755574?w=1200&q=85'

const CONTACT = {
  phone: '+91 85118 90947',
  phoneRaw: '+918511890947',
  email: 'vyomacademyy@gmail.com',
  instagram: 'https://www.instagram.com/vyoma_cademy',
  linkedin: 'https://www.linkedin.com/in/vyom-academy-29962b275',
  whatsapp: 'https://wa.me/918511890947',
}

const courses = [
  { icon: BarChart3, title: 'Business Analysis Fundamentals', desc: 'Requirements gathering, BRD/FRD, stakeholder management, gap analysis & UML.' },
  { icon: Database, title: 'SQL & Databases', desc: 'Master SQL queries, joins, sub-queries, and database design used in real BA projects.' },
  { icon: Building2, title: 'Domain Training', desc: 'Functional domain understanding across BFSI, Healthcare, Retail and E-commerce industries.' },
  { icon: BarChart3, title: 'Advanced Excel', desc: 'Pivot tables, VLOOKUP, Power Query, dashboards and what-if analysis.' },
  { icon: Rocket, title: 'Agile & Scrum', desc: 'User stories, JIRA, sprints, backlog grooming and Scrum ceremonies.' },
  { icon: Briefcase, title: 'Real-Time Projects', desc: '4+ industry case studies across BFSI, Healthcare, Retail and E-commerce domains.' },
]

const whyUs = [
  { icon: Users, title: 'Industry-Expert Trainers', desc: '10+ years of corporate BA experience from Fortune 500 companies.' },
  { icon: Target, title: 'Hands-On Projects', desc: 'Work on live capstone projects mirroring real client requirements.' },
  { icon: Award, title: 'Resume & Interview Prep', desc: 'Mock interviews, profile building & LinkedIn optimization.' },
  { icon: ShieldCheck, title: '100% Placement Assistance', desc: 'Dedicated placement cell with active hiring partners.' },
]

const careers = [
  { role: 'Business Analyst', salary: '₹6 – 12 LPA', icon: Briefcase },
  { role: 'Data Analyst', salary: '₹5 – 10 LPA', icon: BarChart3 },
  { role: 'Product Analyst', salary: '₹7 – 14 LPA', icon: Target },
  { role: 'Functional Consultant', salary: '₹8 – 16 LPA', icon: Trophy },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Business Analyst @ Deloitte',
    text: 'Vyom Academy completely transformed my career. The hands-on projects and mock interviews gave me the confidence to crack my dream job within 2 months of completing the course.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Rahul Verma',
    role: 'Data Analyst @ TCS',
    text: 'Coming from a non-IT background, I was nervous. The trainers patiently explained every concept with real examples. I now lead analytics for a retail vertical!',
    rating: 5,
    initials: 'RV',
  },
  {
    name: 'Anjali Mehta',
    role: 'Product Analyst @ Flipkart',
    text: 'The placement cell is phenomenal. They prepared me end-to-end — resume, LinkedIn, mock interviews. Got 3 offers within 3 weeks!',
    rating: 5,
    initials: 'AM',
  },
]

const faqs = [
  { q: 'Do I need a technical background to join the BA course?', a: 'Not at all! Our curriculum is designed for both technical and non-technical learners. We start from the basics and gradually build advanced skills.' },
  { q: 'What is the duration of the Business Analyst course?', a: 'Our flagship BA program runs for 4 months with weekday and weekend batch options. We also offer a fast-track 8-week intensive cohort.' },
  { q: 'Will I get a certificate after completion?', a: 'Yes. You will receive an industry-recognized Vyom Academy BA certificate plus help with IIBA ECBA preparation.' },
  { q: 'How does placement assistance work?', a: 'After course completion you get unlimited interview calls, mock interviews, resume reviews and 1-on-1 career mentoring until you land a job.' },
  { q: 'Can I attend a free demo before enrolling?', a: 'Absolutely! Book a free live demo session with our senior trainer to experience the teaching style and curriculum firsthand.' },
  { q: 'What is the fee structure and are EMI options available?', a: 'Course fees are highly competitive with 0% EMI options for up to 12 months. Contact our admissions team for current offers and scholarships.' },
]

const stats = [
  { value: '1,000+', label: 'Students Trained' },
  { value: '95%', label: 'Placement Rate' },
  { value: '4.9★', label: 'Student Rating' },
]

function LeadForm({ source = 'hero', compact = false, onDone }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setError('')
    try {
      // 1. Save lead to backend (CRM/MongoDB)
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong')

      // 2. Build WhatsApp message and open chat to admin
      const msg =
        `*New Demo Booking - Vyom Academy*%0A%0A` +
        `*Name:* ${encodeURIComponent(form.name)}%0A` +
        `*Phone:* ${encodeURIComponent(form.phone)}%0A` +
        `*Email:* ${encodeURIComponent(form.email)}%0A` +
        (form.message ? `*Message:* ${encodeURIComponent(form.message)}%0A` : '') +
        `*Source:* ${encodeURIComponent(source)}%0A` +
        `*Time:* ${encodeURIComponent(new Date().toLocaleString('en-IN'))}`
      const waUrl = `https://wa.me/918511890947?text=${msg}`
      // Open WhatsApp in a new tab so the user can tap "Send"
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
      <div className="rounded-xl bg-green-50 border border-green-200 p-6 text-center">
        <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto mb-2" />
        <h4 className="font-semibold text-green-900">Almost there! WhatsApp opened in a new tab.</h4>
        <p className="text-sm text-green-700 mt-1">Just tap <strong>Send</strong> in WhatsApp to confirm your demo booking. Our counselor will reach out within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <Label htmlFor={`name-${source}`} className="text-sm">Full Name *</Label>
          <Input id={`name-${source}`} required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Doe" className="mt-1" />
        </div>
        <div>
          <Label htmlFor={`phone-${source}`} className="text-sm">Phone *</Label>
          <Input id={`phone-${source}`} required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+91 98765 43210" className="mt-1" />
        </div>
      </div>
      <div>
        <Label htmlFor={`email-${source}`} className="text-sm">Email *</Label>
        <Input id={`email-${source}`} type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" className="mt-1" />
      </div>
      {!compact && (
        <div>
          <Label htmlFor={`msg-${source}`} className="text-sm">Message (optional)</Label>
          <Textarea id={`msg-${source}`} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your background or questions" className="mt-1" rows={3} />
        </div>
      )}
      {error && <p className="text-sm text-red-600">{error}</p>}
      <Button type="submit" disabled={status === 'loading'} className="w-full bg-green-600 hover:bg-green-700 text-white h-11 text-base font-semibold">
        {status === 'loading' ? 'Submitting...' : 'Book Free Demo'} {status !== 'loading' && <ArrowRight className="w-4 h-4 ml-1" />}
      </Button>
      <p className="text-xs text-slate-500 text-center">By submitting, you agree to be contacted by Vyom Academy.</p>
    </form>
  )
}

const App = () => {
  const [navOpen, setNavOpen] = useState(false)

  const scrollTo = (id) => {
    setNavOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* NAV */}
      <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/70">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" onClick={(e) => { e.preventDefault(); scrollTo('top') }} className="flex items-center gap-3">
            <img src={LOGO} alt="Vyom Academy logo" className="w-11 h-11 rounded-lg object-contain bg-white shadow-sm border border-slate-200" />
            <div className="leading-tight">
              <div className="font-bold text-slate-900">Vyom Academy</div>
              <div className="text-[10px] text-slate-500 -mt-0.5 tracking-wide">Bridge Business &amp; Technology</div>
            </div>
          </a>
          <ul className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            {[['About', 'about'], ['Courses', 'courses'], ['Why Us', 'why'], ['Careers', 'careers'], ['Testimonials', 'testimonials'], ['FAQ', 'faq'], ['Contact', 'contact']].map(([l, id]) => (
              <li key={id}><button onClick={() => scrollTo(id)} className="hover:text-blue-700 transition">{l}</button></li>
            ))}
          </ul>
          <div className="hidden lg:flex items-center gap-3">
            <Button onClick={() => scrollTo('contact')} variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50">Book Free Demo</Button>
            <Button onClick={() => scrollTo('contact')} className="bg-blue-700 hover:bg-blue-800 text-white">Enroll Now</Button>
          </div>
          <button className="lg:hidden p-2" onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
        {navOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 py-3">
            <ul className="space-y-2 text-sm font-medium">
              {[['About', 'about'], ['Courses', 'courses'], ['Why Us', 'why'], ['Careers', 'careers'], ['Testimonials', 'testimonials'], ['FAQ', 'faq'], ['Contact', 'contact']].map(([l, id]) => (
                <li key={id}><button onClick={() => scrollTo(id)} className="w-full text-left py-2">{l}</button></li>
              ))}
              <li><Button onClick={() => scrollTo('contact')} className="w-full bg-blue-700 hover:bg-blue-800 text-white mt-2">Enroll Now</Button></li>
            </ul>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-5 border-blue-200">
              <Sparkles className="w-3 h-3 mr-1" /> New Batch Starting Soon · Limited Seats
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Become a <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Job-Ready</span><br />Business Analyst
            </h1>
            <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
              Practical, industry-focused training with <strong>real-world projects</strong>, <strong>expert mentors</strong>, and <strong>guaranteed placement support</strong>. Launch your high-paying BA career in just 4 months — no prior tech background required.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button onClick={() => scrollTo('contact')} className="bg-blue-700 hover:bg-blue-800 text-white h-12 text-base px-8 shadow-lg shadow-blue-300/40">
                Enroll Now <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button onClick={() => scrollTo('contact')} variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 h-12 text-base px-8">
                Book Free Demo
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-xl">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-200/60 border border-white">
              <img src={HERO_IMG} alt="Business analyst presenting data charts" className="w-full h-[420px] lg:h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
            </div>
            <Card className="absolute -bottom-6 -left-6 hidden md:block w-64 shadow-xl border-blue-100">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 grid place-items-center">
                  <Trophy className="w-6 h-6 text-green-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Avg. Salary Hike</div>
                  <div className="text-lg font-bold text-slate-900">120%</div>
                </div>
              </CardContent>
            </Card>
            <Card className="absolute -top-6 -right-6 hidden md:block w-64 shadow-xl border-blue-100">
              <CardContent className="p-4 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-100 grid place-items-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <div>
                  <div className="text-xs text-slate-500">Placed in</div>
                  <div className="text-lg font-bold text-slate-900">Top MNCs</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-xs uppercase tracking-widest text-slate-500 mb-4">Our Alumni Work At</p>
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-3 text-slate-400 font-bold text-lg sm:text-xl tracking-tight">
            {['Deloitte', 'Accenture', 'TCS', 'Infosys', 'Capgemini', 'Wipro', 'Cognizant', 'IBM'].map((c) => (
              <span key={c} className="hover:text-slate-700 transition">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={ABOUT_IMG} alt="Vyom Academy training session" className="rounded-2xl shadow-xl w-full h-[420px] object-cover" />
            <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white rounded-2xl p-6 shadow-2xl hidden md:block">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm text-blue-100">Years of Excellence</div>
            </div>
          </div>
          <div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">About Vyom Academy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">India's Most Trusted Business Analysis Institute</h2>
            <p className="mt-5 text-slate-600 leading-relaxed text-lg">
              At <strong>Vyom Academy</strong>, we transform aspiring professionals into confident, industry-ready Business Analysts. With 10+ years of training excellence, our curriculum is engineered by senior BA leaders from global Fortune 500 companies.
            </p>
            <ul className="mt-6 space-y-3">
              {['Real-world skills taught through live projects', 'Industry-certified expert trainers with 10+ years experience', 'Industry-recognized course completion certificate', 'Dedicated placement support with personalized interview guidance'].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{p}</span>
                </li>
              ))}
            </ul>
            <Button onClick={() => scrollTo('contact')} className="mt-8 bg-blue-700 hover:bg-blue-800 text-white">
              Talk to a Counselor <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="py-20 lg:py-24 bg-gradient-to-b from-blue-50/40 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">Course Highlights</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything You Need to Become a Top BA</h2>
            <p className="mt-4 text-slate-600 text-lg">A comprehensive curriculum covering tools, techniques and real business scenarios — all aligned with current industry hiring trends.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((c) => (
              <Card key={c.title} className="group border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 grid place-items-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    <c.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3 text-sm">
            {['Excel', 'SQL', 'Power BI', 'Tableau', 'JIRA', 'Confluence', 'BPMN', 'UML', 'Agile', 'Scrum'].map((t) => (
              <span key={t} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-medium shadow-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">Why Choose Vyom Academy</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">More Than Just Training — A Career Partnership</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w, i) => (
              <Card key={w.title} className="relative overflow-hidden border-slate-200 hover:shadow-2xl transition-all duration-300">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-lg bg-blue-100 grid place-items-center">
                      <w.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <span className="text-3xl font-bold text-blue-100">0{i + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{w.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{w.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CAREER OUTCOMES */}
      <section id="careers" className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-white/15 text-white hover:bg-white/15 border-white/20 mb-4">Career Outcomes</Badge>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">Unlock High-Paying Roles Across Top Industries</h2>
              <p className="mt-5 text-blue-100 text-lg leading-relaxed">Our graduates are working at leading MNCs across BFSI, Healthcare, Retail, IT and Consulting domains — earning competitive packages from day one.</p>
              <img src={DASH_IMG} alt="Analytics dashboard" className="mt-8 rounded-xl shadow-2xl border border-white/10" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {careers.map((c) => (
                <Card key={c.role} className="bg-white/95 backdrop-blur border-0 hover:scale-[1.03] transition-transform">
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-lg bg-blue-100 grid place-items-center">
                      <c.icon className="w-5 h-5 text-blue-700" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{c.role}</h3>
                    <div className="mt-2 flex items-center gap-1 text-green-700 font-semibold">
                      <IndianRupee className="w-4 h-4" /> {c.salary.replace('₹', '')}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Avg. annual package</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">Student Success Stories</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Real Stories. Real Careers.</h2>
            <p className="mt-4 text-slate-600 text-lg">Hear from our alumni about how Vyom Academy transformed their careers.</p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="border-slate-200 hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 text-amber-400">
                    {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="mt-4 text-slate-700 leading-relaxed italic">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center font-bold">
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 to-indigo-800 p-10 lg:p-16 text-center shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="relative">
              <Sparkles className="w-10 h-10 text-blue-200 mx-auto" />
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white leading-tight">Start Your Career in Business Analysis Today</h2>
              <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">Limited seats for our next batch. Join 1,000+ alumni who launched their dream BA careers with Vyom Academy.</p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Button onClick={() => scrollTo('contact')} className="bg-white text-blue-700 hover:bg-blue-50 h-12 text-base px-8 font-semibold shadow-xl">
                  Join Now <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 h-12 text-base px-8">
                  <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> Next batch starts in 7 days</span>
                <span className="flex items-center gap-1"><ShieldCheck className="w-4 h-4" /> 100% Placement Assistance</span>
                <span className="flex items-center gap-1"><Award className="w-4 h-4" /> Industry Certificate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 lg:py-24 bg-slate-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">FAQ</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-slate-600">Everything you need to know before enrolling</p>
          </div>
          <Accordion type="single" collapsible className="mt-10 bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200 mb-4">Get In Touch</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Have Questions? We're Here to Help.</h2>
            <p className="mt-4 text-slate-600 text-lg">Speak to our admissions team for course details, fees, batch schedules and personalized career guidance.</p>
            <div className="mt-8 space-y-5">
              <a href={`tel:${CONTACT.phoneRaw}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 grid place-items-center group-hover:bg-blue-700 transition">
                  <Phone className="w-5 h-5 text-blue-700 group-hover:text-white transition" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Call Us</div>
                  <div className="font-semibold text-slate-900">{CONTACT.phone}</div>
                </div>
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 grid place-items-center group-hover:bg-blue-700 transition">
                  <Mail className="w-5 h-5 text-blue-700 group-hover:text-white transition" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Email Us</div>
                  <div className="font-semibold text-slate-900">{CONTACT.email}</div>
                </div>
              </a>
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-green-100 grid place-items-center group-hover:bg-green-600 transition">
                  <MessageCircle className="w-5 h-5 text-green-700 group-hover:text-white transition" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">WhatsApp</div>
                  <div className="font-semibold text-slate-900">Chat with us instantly</div>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-pink-100 grid place-items-center">
                  <Instagram className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">Follow Us</div>
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-900 hover:text-blue-700">@vyoma_cademy</a>
                </div>
              </div>
            </div>
            <img src={CORP_IMG} alt="Corporate training" className="mt-10 rounded-2xl shadow-lg w-full h-56 object-cover hidden md:block" />
          </div>
          <Card className="border-slate-200 shadow-xl">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-2xl font-bold text-slate-900">Book Your Free Demo</h3>
              <p className="mt-1 text-sm text-slate-600">Fill in your details — our counselor will call within 24 hours.</p>
              <div className="mt-6">
                <LeadForm source="contact-form" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <img src={LOGO} alt="Vyom Academy" className="w-11 h-11 rounded-lg object-contain bg-white p-1" />
                <div>
                  <div className="font-bold text-white">Vyom Academy</div>
                  <div className="text-[10px] text-slate-400 tracking-wide">Bridge Business &amp; Technology</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-400 max-w-md leading-relaxed">India&apos;s most trusted Business Analyst Training Institute. Empowering 1,000+ professionals to launch successful BA careers.</p>
              <div className="mt-5 flex gap-3">
                <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-700 grid place-items-center transition">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-pink-600 grid place-items-center transition">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-red-600 grid place-items-center transition">
                  <Mail className="w-4 h-4" />
                </a>
                <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-green-600 grid place-items-center transition">
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {[['About', 'about'], ['Courses', 'courses'], ['Careers', 'careers'], ['FAQ', 'faq'], ['Contact', 'contact']].map(([l, id]) => (
                  <li key={id}><button onClick={() => scrollTo(id)} className="hover:text-white transition">{l}</button></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5" /> {CONTACT.phone}</li>
                <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5" /> {CONTACT.email}</li>
                <li className="flex items-start gap-2"><Instagram className="w-4 h-4 mt-0.5" /> @vyoma_cademy</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} Vyom Academy. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Refund Policy</a>
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
        className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 grid place-items-center shadow-2xl shadow-green-300 transition-transform hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </div>
  )
}

export default App
