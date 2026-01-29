"use client"

import React from "react"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { ChevronLeft, ChevronRight, Database, Cloud, BarChart3, Layers, ImageIcon, Mail, Linkedin, Github, Briefcase, Target, Lightbulb, CheckCircle2, Server, Cog, Zap, FileSpreadsheet, Calendar, TrendingUp, Code, Search, PenTool, Gauge } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideProps {
  children: React.ReactNode
}

function Slide({ children }: SlideProps) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 md:p-12">
      {children}
    </div>
  )
}

function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div className="w-full h-64 md:h-80 border-2 border-dashed border-slate-600 rounded-lg flex flex-col items-center justify-center gap-3 bg-slate-800/50">
      <ImageIcon className="w-12 h-12 text-slate-500" />
      <span className="text-slate-400 text-sm font-medium">{label}</span>
    </div>
  )
}

function InfoCard({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: string }) {
  return (
    <div className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Icon className="w-5 h-5 text-blue-400" />
        </div>
      </div>
      <div>
        <h4 className="font-semibold text-blue-400 mb-1">{title}</h4>
        <p className="text-slate-300 text-sm leading-relaxed">{content}</p>
      </div>
    </div>
  )
}

function TechBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
      {children}
    </span>
  )
}

function MermaidDiagram({ chart }: { chart: string }) {
  const mermaidRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let mermaid: any
    
    const loadMermaid = async () => {
      try {
        const mermaidModule = await import('mermaid')
        mermaid = mermaidModule.default
        
        mermaid.initialize({
          theme: 'dark',
          themeVariables: {
            darkMode: true,
            primaryColor: '#3b82f6',
            primaryTextColor: '#e2e8f0',
            primaryBorderColor: '#475569',
            lineColor: '#64748b',
            secondaryColor: '#1e293b',
            tertiaryColor: '#0f172a',
            background: '#0f172a',
            mainBkg: '#1e293b',
            secondBkg: '#334155',
          },
          startOnLoad: true,
          flowchart: {
            useMaxWidth: true,
            htmlLabels: true,
            curve: 'basis'
          }
        })
        
        setIsLoaded(true)
      } catch (error) {
        console.error('Error loading Mermaid:', error)
      }
    }

    loadMermaid()
  }, [])

  useEffect(() => {
    if (isLoaded && mermaidRef.current && chart) {
      const renderChart = async () => {
        try {
          const mermaidModule = await import('mermaid')
          const mermaid = mermaidModule.default
          
          mermaidRef.current!.innerHTML = ''
          mermaidRef.current!.removeAttribute('data-processed')
          
          const { svg } = await mermaid.render('mermaid-diagram-' + Date.now(), chart)
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg
          }
        } catch (error) {
          console.error('Error rendering diagram:', error)
        }
      }
      
      renderChart()
    }
  }, [isLoaded, chart])

  return (
    <div className="flex justify-center items-center min-h-[300px] bg-slate-900/50 rounded-lg border border-slate-700">
      <div ref={mermaidRef} className="w-full max-w-4xl" />
    </div>
  )
}

// Slide 1: Title Card
function TitleSlide() {
  return (
    <Slide>
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight text-balance">
            Software Engineer | Power Platform
          </h1>
          <p className="text-xl md:text-2xl text-blue-400 font-medium">
            Engineering Enterprise-Grade Solutions
          </p>
        </div>
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        
        <div className="space-y-3">
          <p className="text-2xl md:text-3xl text-slate-200 font-semibold">
            João Custódio
          </p>
          <p className="text-base text-slate-400">
            São Paulo, Brazil
          </p>
          <div className="inline-block">
            <p className="text-sm text-slate-300 bg-slate-800/60 px-4 py-2 rounded-full border border-slate-700">
              MBA in Software Engineering (USP) • 5+ Years Experience
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center gap-6 pt-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-yellow-500/20 flex items-center justify-center border border-yellow-500/30">
              <BarChart3 className="w-7 h-7 text-yellow-400" />
            </div>
            <span className="text-xs text-slate-400">Power BI</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <Layers className="w-7 h-7 text-purple-400" />
            </div>
            <span className="text-xs text-slate-400">Power Apps</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-green-500/20 flex items-center justify-center border border-green-500/30">
              <Zap className="w-7 h-7 text-green-400" />
            </div>
            <span className="text-xs text-slate-400">Power Automate</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <Code className="w-7 h-7 text-blue-400" />
            </div>
            <span className="text-xs text-slate-400">C# / .NET</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <Cloud className="w-7 h-7 text-cyan-400" />
            </div>
            <span className="text-xs text-slate-400">Azure</span>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// Slide 2: Professional Profile
function AboutSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">About Me</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
        </div>
        
        {/* Split View: 50/50 Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column: Profile Photo & Global Context */}
          <div className="space-y-6">
            {/* Profile Photo */}
            <div className="flex items-center justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500/30 shadow-lg shadow-blue-500/20">
                <Image
                  src="/photo-jon.png"
                  alt="João Custódio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* MBA Badge */}
            <div className="text-center">
              <div className="inline-block bg-slate-800/60 px-4 py-2 rounded-lg border border-slate-700">
                <p className="text-sm text-slate-300 font-medium">
                  MBA in Software Engineering (USP)
                </p>
              </div>
            </div>
            
            {/* Global Experience & Languages */}
            <div className="bg-slate-800/40 border border-slate-700 rounded-xl p-5 space-y-3">
              <div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-blue-400">Global Experience:</strong> Collaborated with cross-functional teams in US, India, and Brazil.
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-blue-400">Languages:</strong> English (Fluent), Portuguese (Native).
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-blue-400">Current Focus:</strong> Studying Mandarin Chinese; pursuing Power Apps certifications (currently PL-200).
                </p>
              </div>
              <div>
                <p className="text-slate-200 text-sm leading-relaxed">
                  <strong className="text-blue-400">Visa:</strong> US visa holder.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Cards */}
          <div className="space-y-4">
            {/* Card 1: Current Role */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-blue-400 mb-1">Current Role: Power Platform Developer @ Zoetis</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developing enterprise solutions for a Global Animal Health company. Currently supporting <strong className="text-cyan-400">500+ active users</strong>.
                </p>
              </div>
            </div>
            
            {/* Card 2: Engineering Impact */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-green-400 mb-1">What I Deliver</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Delivered <strong className="text-blue-400">20+ Power Automate workflows</strong> and <strong className="text-blue-400">10+ Canvas Apps</strong> to standardize data intake and approval processes.
                </p>
              </div>
            </div>
            
            {/* Card 3: Data Experience */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
              <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-purple-400 mb-1">Data Experience</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Specialist in Dataverse & SQL integrations. My automations saved <strong className="text-blue-400">15+ hours of manual work per week</strong> for sales teams at Smith & Nephew.
                </p>
              </div>
            </div>

            {/* Card 4: Power BI Deliverables */}
            <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 flex items-start gap-4 hover:border-blue-500/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0 border border-yellow-500/30">
                <BarChart3 className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h4 className="text-base font-semibold text-yellow-400 mb-2">Power BI & Analytics Expertise</h4>
                <p className="text-sm text-slate-300 leading-relaxed mb-2">
                  Built <strong className="text-yellow-400">12+ interactive dashboards</strong> serving <strong className="text-blue-400">800+ daily users</strong>. Implemented star-schema models with performance optimizations.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Note: All Power Apps I develop include embedded analytics and data visualization components.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// Slide 3: Methodology - Process Flow
function MethodologySlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">My Methodology</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          <p className="text-slate-400 mt-4 text-lg">Design-First Workflow for Enterprise Solutions</p>
        </div>
        
        {/* Horizontal Process Flow */}
        <div className="flex items-center justify-between gap-4">
          {/* Step 1: Discovery & Analysis */}
          <div className="flex-1">
            <div className="bg-slate-800/60 border-2 border-blue-500/50 rounded-xl p-6 text-center hover:border-blue-500 transition-all hover:shadow-lg hover:shadow-blue-500/20">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Discovery</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Deep-dive meetings to map the 'As-Is' process and identify user pain points before talking about technology.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-8 h-8 text-blue-500" />
          </div>
          
          {/* Step 2: Wireframing First (HIGHLIGHTED) */}
          <div className="flex-1">
            <div className="bg-slate-800/60 border-2 border-emerald-500/60 rounded-xl p-6 text-center hover:border-emerald-500 transition-all hover:shadow-lg hover:shadow-emerald-500/20 ring-2 ring-emerald-500/20">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-emerald-400 mb-2">Wireframing First</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Building fast mockups (Figma/Web) <strong className="text-emerald-400">outside</strong> of Power Platform to validate the UI/Flow with Key Users and get sign-off <strong className="text-emerald-400">before</strong> development starts.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-8 h-8 text-emerald-500" />
          </div>
          
          {/* Step 3: Agile MVP Build */}
          <div className="flex-1">
            <div className="bg-slate-800/60 border-2 border-yellow-500/50 rounded-xl p-6 text-center hover:border-yellow-500 transition-all hover:shadow-lg hover:shadow-yellow-500/20">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MVP Development</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Once validated, I build the Minimum Viable Product using Power Apps & Automate, focusing on core functionality and speed.
              </p>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex-shrink-0">
            <ChevronRight className="w-8 h-8 text-yellow-500" />
          </div>
          
          {/* Step 4: Scale & Optimization */}
          <div className="flex-1">
            <div className="bg-slate-800/60 border-2 border-purple-500/50 rounded-xl p-6 text-center hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <Gauge className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Stress Test & CI</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Rigorous stress testing for performance bottlenecks, followed by Continuous Improvement loops based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// Slide 4: Project 1 - Business Context
function Project1BusinessSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Project 1</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 text-balance">Cycle Order Management</h2>
          <p className="text-slate-400 mt-2">Business Context & Impact</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: The Business Problem */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">1. The Business Problem</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Management relied on scattered Excel/Email orders. Users frequently ordered outside valid dates, and 'Proportional Grade' calculations had a high manual error rate.
            </p>
          </div>
          
          {/* Card 2: What I Built (Solution) */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">4. What I Built (Solution)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A centralized Canvas App (<span className="text-blue-400 font-mono text-xs">cycle-order-app</span>) with input validation, integrated with Power Automate for batch processing and Excel Scripts for reporting.
            </p>
          </div>
          
          {/* Card 3: Business Decisions Enabled - HIGHLIGHTED */}
          <div className="bg-slate-800/60 border-2 border-green-500/50 rounded-xl p-6 shadow-lg shadow-green-500/20">
            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-3 text-center">5. Business Decisions Enabled</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enabled <strong className="text-green-400">Proactive Demand Planning</strong> instead of reactive error-fixing. Supply chain can now lock forecasts immediately after cycle closure with 100% data trust.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// Slide 5: Project 1 - Technical Deep Dive
function Project1TechSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Project 1</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Architecture & Data</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: The Data Sources */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Database className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">2. The Data Sources</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              <strong className="text-purple-400">SharePoint Lists:</strong> Optimized as a relational backend.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-purple-400">SQL Server:</strong> Connected for long-term historical data archiving and trend analysis.
            </p>
          </div>
          
          {/* Card 2: How I Modeled the Data */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Layers className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">3. How I Modeled the Data</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Implemented a <strong className="text-blue-400">Star Schema</strong> logic. Created a Bridge Table (<span className="text-blue-400 font-mono text-xs">Order_Items</span>) to resolve the Many-to-Many relationship between 'Orders' and 'Products', ensuring historical integrity.
            </p>
          </div>
          
          {/* Card 3: Technical Deep Dive */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">Technical Deep Dive (Why & How)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">
              <strong className="text-yellow-400">Why JSON Batching?</strong> To reduce API calls by 90%.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-yellow-400">Why Star Schema?</strong> To simplify DAX measures for 'Year-over-Year' cycle comparison.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <MermaidDiagram chart={`
flowchart TD
    A["👤 User"] -->|"Places Order"| B["📱 Canvas App<br/>(Cycle Order)"]
    B -->|"Read/Write"| C["📋 SharePoint Lists<br/>(Time Dimension, Products)"]
    B -->|"Triggers"| D["⚡ Power Automate<br/>(JSON Batch)"]
    D -->|"Writes to"| E["🔗 Order_Items<br/>(Bridge Table)"]
    C -->|"Data Source"| F["📊 Power BI<br/>(Reports & Dashboards)"]
    G["🗄️ SQL Server<br/>(Historical Archive)"] -->|"Long-term Data"| F
    E -->|"Transaction Data"| F

    classDef userClass fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#ffffff
    classDef appClass fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#ffffff
    classDef dataClass fill:#10b981,stroke:#059669,stroke-width:2px,color:#ffffff
    classDef automationClass fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#ffffff
    classDef analyticsClass fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#ffffff

    class A userClass
    class B appClass
    class C,E,G dataClass
    class D automationClass
    class F analyticsClass
          `} />
        </div>
      </div>
    </Slide>
  )
}

// Slide 6: Project 2 - Business Context
function Project2BusinessSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Project 2</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 text-balance">Daycare Assistance Portal</h2>
          <p className="text-slate-400 mt-2">Business Context & Impact</p>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1: The Business Problem */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-red-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">1. The Business Problem</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              HR spent hours manually validating receipts and calculating age eligibility. High risk of compliance errors (paying ineligible dependents).
            </p>
          </div>
          
          {/* Card 2: What I Built (Solution) */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">4. What I Built (Solution)</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              A Self-Service Portal (<span className="text-blue-400 font-mono text-xs">hr-benefits-portal-app</span>) with <strong className="text-blue-400">Copilot Studio</strong> integration for policy guidance and automated approval workflows.
            </p>
          </div>
          
          {/* Card 3: Business Decisions Enabled - HIGHLIGHTED */}
          <div className="bg-slate-800/60 border-2 border-green-500/50 rounded-xl p-6 shadow-lg shadow-green-500/20">
            <div className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-7 h-7 text-green-400" />
            </div>
            <h3 className="text-lg font-semibold text-green-400 mb-3 text-center">5. Business Decisions Enabled</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Enabled <strong className="text-green-400">Risk-Free Compliance</strong>. HR can now audit the entire process digitally. Fraud reduction decisions are automated via strict validation rules.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  )
}

// Slide 7: Project 2 - Technical Deep Dive
function Project2TechSlide() {
  return (
    <Slide>
      <div className="w-full max-w-6xl">
        <div className="text-center mb-8">
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Project 2</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Architecture & Data</h2>
          <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full mt-4" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Card 1: The Data Sources */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
              <Database className="w-7 h-7 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">2. The Data Sources</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-3">
              <strong className="text-purple-400">Dataverse:</strong> For robust security roles and relational integrity.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-purple-400">Azure Blob Storage:</strong> For secure, scalable storage of fiscal receipt documents.
            </p>
          </div>
          
          {/* Card 2: How I Modeled the Data */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
              <Cog className="w-7 h-7 text-blue-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">3. How I Modeled the Data</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Modeled strict validation logic directly in the schema: <span className="text-blue-400 font-mono text-xs italic">IF (Age &gt; 6 AND SpecialNeeds == False) THEN Ineligible</span>. Enforced via calculated columns and Power Fx.
            </p>
          </div>
          
          {/* Card 3: Technical Deep Dive */}
          <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <div className="w-14 h-14 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-7 h-7 text-yellow-400" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-3 text-center">Technical Deep Dive (Why & How)</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">
              <strong className="text-yellow-400">Why Copilot?</strong> To deflect L1 support tickets.
            </p>
            <p className="text-slate-300 text-sm leading-relaxed">
              <strong className="text-yellow-400">Why Dataverse?</strong> To implement Row-Level Security (RLS) ensuring employees only see their own data.
            </p>
          </div>
        </div>
        
        <div className="mt-6">
          <MermaidDiagram chart={`
flowchart TD
    A["👤 Employee"] -->|"Ask Policy Questions"| B["🤖 Copilot Studio<br/>(Chatbot)"]
    B -->|"Multi-Level Validation Logic<br/>• Age > 6 AND SpecialNeeds == False<br/>• Employment Status == Active<br/>• Receipt Date < 90 days<br/>• Amount ≤ Monthly Limit<br/>• Provider == Approved List"| C["🗄️ Dataverse<br/>(Policy & Employee Data)"]
    A -->|"Upload Receipt"| D["☁️ Azure Blob Storage<br/>(Secure Document Store)"]
    C -->|"Triggers"| E["⚡ Power Automate<br/>(Approval Workflow)"]
    E -->|"Teams Notification"| F["👥 HR Admin<br/>(Approval Decision)"]
    F -->|"Approve/Reject"| E
    E -->|"Update Status"| C
    C -->|"Row-Level Security<br/>(RLS)"| A

    classDef employeeClass fill:#3b82f6,stroke:#1e40af,stroke-width:2px,color:#ffffff
    classDef aiClass fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#ffffff
    classDef dataClass fill:#10b981,stroke:#059669,stroke-width:2px,color:#ffffff
    classDef storageClass fill:#06b6d4,stroke:#0891b2,stroke-width:2px,color:#ffffff
    classDef automationClass fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#ffffff
    classDef adminClass fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#ffffff

    class A employeeClass
    class B aiClass
    class C dataClass
    class D storageClass
    class E automationClass
    class F adminClass
          `} />
        </div>
      </div>
    </Slide>
  )
}

// Slide 8: Q&A / Thank You
function ThankYouSlide() {
  return (
    <Slide>
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">Thank You</h2>
          <p className="text-xl md:text-2xl text-blue-400 font-medium">
            Ready for Technical Deep Dive
          </p>
        </div>
        
        <div className="h-px w-32 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto" />
        
        <div className="pt-8 space-y-4">
          <p className="text-slate-400 text-sm uppercase tracking-wider">Contact</p>
          <div className="flex items-center justify-center gap-6">
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
              </div>
              <span className="text-xs text-slate-500">Email</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
              </div>
              <span className="text-xs text-slate-500">LinkedIn</span>
            </a>
            <a href="#" className="flex flex-col items-center gap-2 group">
              <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:border-blue-500 group-hover:bg-blue-500/10 transition-all">
                <Github className="w-5 h-5 text-slate-400 group-hover:text-blue-400" />
              </div>
              <span className="text-xs text-slate-500">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </Slide>
  )
}

const slides = [
  TitleSlide,
  AboutSlide,
  Project1BusinessSlide,
  Project1TechSlide,
  Project2BusinessSlide,
  Project2TechSlide,
  MethodologySlide,
  ThankYouSlide,
]

export function SlideDeck() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1))
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0))
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        goToNext()
      } else if (e.key === "ArrowLeft") {
        goToPrevious()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious])

  const CurrentSlideComponent = slides[currentSlide]
  const progress = ((currentSlide + 1) / slides.length) * 100

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Slide counter */}
      <div className="fixed top-4 right-4 text-slate-500 text-sm font-mono z-50">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Main slide area */}
      <main className="flex-1 flex items-center justify-center overflow-hidden">
        <CurrentSlideComponent />
      </main>

      {/* Navigation controls */}
      <div className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-center gap-4 bg-gradient-to-t from-slate-900 to-transparent">
        <Button
          variant="outline"
          size="lg"
          onClick={goToPrevious}
          disabled={currentSlide === 0}
          className="bg-slate-800/80 border-slate-700 text-white hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          Previous
        </Button>
        
        {/* Slide dots */}
        <div className="flex items-center gap-2 px-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                index === currentSlide 
                  ? "bg-blue-500 w-6" 
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <Button
          variant="outline"
          size="lg"
          onClick={goToNext}
          disabled={currentSlide === slides.length - 1}
          className="bg-slate-800/80 border-slate-700 text-white hover:bg-slate-700 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-5 h-5 ml-1" />
        </Button>
      </div>
    </div>
  )
}
