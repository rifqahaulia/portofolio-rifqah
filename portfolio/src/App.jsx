import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import rifqahPhoto from './assets/rifqah.jpg'
import elearningPhoto from './assets/elearning-rsppn.png'
import carefullPhoto from './assets/carefull-ui.png'
import haadesPhoto from './assets/dashboard-haades.png'
import kittyPhoto from './assets/website-kitty-korner.png'
import sisInfoPhoto from './assets/sistem-informasi-rsppn.png'
import vueJsCertPhoto from './assets/sertifikat-vue-js.png'
import dqlabSqlCertPhoto from './assets/dqlab-sql.png'
import dqlabPythonCertPhoto from './assets/dqlab-python.png'
import huaweiCertPhoto from './assets/huawei-sertifikat.png'
import pythonIntermediateCertPhoto from './assets/Python Intermediate.png'
import introPythonCertPhoto from './assets/Introduction to python.png'
import BlurText from './components/BlurText'
import SectionReveal from './components/SectionReveal'
import CursorTrail from './components/CursorTrail'

function App() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute('id')
        }
      })
      
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <CursorTrail />
      {/* Navigation */}
      <nav className="nav">
        <div className="container">
          <div className="nav-content">
            <a href="#" className="logo">Rifqah Aulia Salsabilla</a>
            <ul className="nav-links">
              <li>
                <a 
                  onClick={() => scrollToSection('about')}
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  Tentang
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('experience')}
                  className={activeSection === 'experience' ? 'active' : ''}
                >
                  Pengalaman
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('projects')}
                  className={activeSection === 'projects' ? 'active' : ''}
                >
                  Project
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('skills')}
                  className={activeSection === 'skills' ? 'active' : ''}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  onClick={() => scrollToSection('certificates')}
                  className={activeSection === 'certificates' ? 'active' : ''}
                >
                  Sertifikat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <div className="hero-title-wrapper">
                <BlurText
                  text="Hi, Saya "
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="hero-title-white"
                />
                <BlurText
                  text="Rifqah Aulia Salsabilla"
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="hero-title-gradient"
                />
              </div>
              <BlurText
                text="Full Stack Developer & Designer"
                delay={40}
                animateBy="words"
                direction="top"
                className="hero-subtitle"
              />
              <BlurText
                text="Saya passionate dalam membangun aplikasi web yang modern dan user-friendly."
                delay={30}
                animateBy="words"
                direction="top"
                className="hero-description"
              />
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('projects')} className="btn btn-primary">
                  Lihat Project
                </button>
                <button onClick={() => scrollToSection('about')} className="btn btn-secondary">
                  Tentang Saya
                </button>
              </div>
            </div>
            <div className="hero-image">
              <img src={rifqahPhoto} alt="Rifqah Aulia Salsabilla" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">Tentang Saya</h2>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="about-content">
              <p>
                Halo! Saya adalah seorang developer yang passionate dalam menciptakan solusi digital yang inovatif. 
                Dengan pengalaman di berbagai project dan organisasi, saya terus belajar dan berkembang dalam dunia teknologi.
              </p>
              <p>
                Saya senang bekerja dengan teknologi terbaru dan selalu mencari cara untuk meningkatkan skill saya.
                Fokus saya adalah membuat aplikasi yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman terbaik bagi pengguna.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">Pengalaman</h2>
          </SectionReveal>
          
          {/* Magang */}
          <SectionReveal delay={0.2}>
            <div className="experience-category">
              <h3 className="category-title">Magang</h3>
              <div className="timeline">
                <TimelineItem
                  title="Technical Writer - TelkomSigma"
                  date="31 Juli 2026"
                  location="Jakarta"
                  description="Bertanggung jawab dalam pembuatan dokumentasi teknis untuk produk dan layanan TelkomSigma, termasuk dokumentasi API, user guide, technical specification, dan knowledge base. Berkolaborasi dengan tim developer dan product manager untuk memastikan dokumentasi yang akurat dan mudah dipahami."
                />
                <TimelineItem
                  title="Frontend Developer - Airnav Indonesia"
                  date="31 Juli 2024 - 31 Januari 2025"
                  location="Kota Tangerang"
                  description="Bertanggung jawab dalam membangun website HAADES (Highly Accurate Aircraft Data Enhancement System), aplikasi pengelolaan data untuk pencatatan penerbangan overflying di wilayah udara FIR Jakarta dan Ujung Pandang yang digunakan sebagai bahan baku produksi (penagihan) biaya pelayanan navigasi penerbangan. Selain itu juga membuat mockup website HAADES, mockup website Stream, serta mengembangkan bagian frontend untuk Website App (Aplikasi Perkantoran)."
                />
                <TimelineItem
                  title="Fullstack Developer - RSPPN (Rumah Sakit Pusat Pertahanan Negara)"
                  date="17 Januari 2025 - 17 Mei 2025"
                  location="Jakarta Selatan"
                  description="Bertanggung jawab dalam pengembangan dua platform website:"
                  responsibilities={[
                    'Website Sistem Informasi Akademik (Frontend Developer) – Dibuat menggunakan HTML, CSS, dan JavaScript untuk tampilan frontend, berfungsi sebagai portal informasi dan administrasi bagi mahasiswa magang di RSPPN.',
                    'Website E-Learning (Fullstack Developer) – Dibangun dengan framework Laravel 11 dan PHP untuk backend, serta menggunakan sistem database untuk pengelolaan data. Platform ini memfasilitasi proses belajar mahasiswa magang, termasuk fitur login, upload tugas, unduh materi, dan manajemen nilai.'
                  ]}
                />
              </div>
            </div>
          </SectionReveal>

          {/* Organisasi */}
          <SectionReveal delay={0.4}>
            <div className="experience-category">
              <h3 className="category-title">Organisasi</h3>
              <div className="timeline">
                <TimelineItem
                  title="Sukarelawan - Charity Commfest 2024"
                  date="Oktober 2024"
                  location="Tangerang, Banten"
                  description="Berpartisipasi dalam kegiatan penanaman mangrove di Teluknaga sebagai bagian dari upaya reboisasi untuk mengatasi perubahan iklim dan meningkatkan kesadaran akan pentingnya hutan mangrove. Bekerja sama dengan tim Mangrove Jakarta dalam kegiatan pelestarian lingkungan untuk melindungi pesisir dari abrasi dan menyediakan habitat bagi berbagai spesies. Pengalaman ini meningkatkan kepedulian terhadap isu lingkungan, keterampilan kerja sama tim, serta komitmen terhadap keberlanjutan dan pelestarian alam."
                />
                <TimelineItem
                  title="PIC/Mentor - Perkenalan Prodi Informatika UMN 2024"
                  date="Februari 2024 - Agustus 2024"
                  location="Tangerang, Banten"
                  description="Menjadi pendamping kelompok dalam kegiatan PPIF dengan membimbing anggota agar memahami tujuan acara dan berpartisipasi aktif, memfasilitasi komunikasi antara panitia dan anggota kelompok, serta mengarahkan dalam menyelesaikan tugas-tugas kreatif. Memberikan dukungan motivasi untuk membantu adaptasi anggota terhadap lingkungan kampus baru, serta menyusun laporan kemajuan dan evaluasi partisipasi. Pengalaman ini mengembangkan keterampilan kepemimpinan, komunikasi interpersonal, dan manajemen kelompok dalam suasana kolaboratif dan kreatif."
                />
                <TimelineItem
                  title="Anggota Divisi Medis - Orientasi Mahasiswa Baru UMN 2023"
                  date="Juni 2023 - September 2023"
                  location="Tangerang, Banten"
                  description="Bertugas di divisi medis selama kegiatan acara dengan memberikan layanan pertolongan pertama kepada peserta, panitia dan tamu yang membutuhkan, serta memantau kondisi kesehatan peserta. Menyiapkan dan menata peralatan medis, berkoordinasi dengan divisi keamanan dan logistik untuk memastikan akses ke area medis, serta mencatat laporan kesehatan terkait insiden medis yang terjadi selama acara berlangsung."
                />
                <TimelineItem
                  title="Anggota Divisi Keamanan - Manifest UMN 2022"
                  date="September 2022 - Desember 2022"
                  location="Tangerang, Banten"
                  description="Menjadi bagian dari divisi keamanan dalam kegiatan Manifest Universitas Multimedia Nusantara, bertanggung jawab menjaga keamanan dan ketertiban acara, menangani insiden darurat secara cepat dan efektif, menyusun peraturan bersama tim untuk panitia dan peserta, serta mengatur arus keluar dan masuk mahasiswa selama kegiatan. Pengalaman ini mengembangkan keterampilan komunikasi, kepemimpinan, dan pemecahan masalah dalam situasi yang dinamis."
                />
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">Project</h2>
          </SectionReveal>
          <div className="projects-grid">
            <SectionReveal delay={0.2}>
              <ProjectCard
                title="Website E-Learning RSPPN"
                description="Website Sistem E-Learning RSPPN — platform pembelajaran digital yang dirancang untuk mendukung program magang dan pengembangan kompetensi mahasiswa di bidang kesehatan. Website ini memfasilitasi akses materi, pengumpulan tugas, dan fitur administrasi lainnya untuk mendukung proses belajar yang lebih terstruktur dan efisien."
                tags={['PHP', 'Laravel 11', 'MySQL']}
                image={elearningPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <ProjectCard
                title="CareFull Prototype App"
                description="Carefull adalah aplikasi seluler kesehatan yang bertujuan untuk memudahkan pengguna mendaftar pemeriksaan kesehatan & memesan obat tanpa harus datang lebih dulu. Aplikasi ini berfokus pada fungsi tampilan aplikasi untuk memesan pemeriksaan kesehatan, pemesanan obat, pembayaran, dan profil. Tersedia juga buku panduan untuk membantu pengguna yang kesulitan menggunakan aplikasi ini."
                tags={['UI/UX', 'Figma']}
                image={carefullPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <ProjectCard
                title="Website HAADES"
                description="HAADES atau Highly Accurate Aircraft Data Enhancement System merupakan aplikasi pendukung pengelolaan data yang digunakan untuk mencatat penerbangan Overflying yang melintas di wilayah udara FIR (Flight Information Region) Jakarta dan Ujung Pandang."
                tags={['Nuxt.js', 'Vue.js', 'Tailwind CSS']}
                image={haadesPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <ProjectCard
                title="Website Kitty Corner"
                description="Website pet shop bertema kucing yang menyediakan berbagai layanan seperti cat salon, cat hotel, cat shop, dan adopsi kucing. Website ini juga dilengkapi dengan fasilitas cafe dan cat playground, memberikan pengalaman unik bagi pelanggan yang ingin makan dan menghabiskan waktu bersama kucing mereka."
                tags={['React.js', 'Axios', 'Bootstrap']}
                image={kittyPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <ProjectCard
                title="Website Sistem Informasi RSPPN"
                description="Website ini dirancang dengan pendekatan user-friendly, menampilkan menu navigasi utama seperti Beranda, Komkordik, SOP, Penelitian, Agenda, dan Fasilitas. Fitur utama yang saya sediakan adalah tombol pendaftaran magang/PKL, yang langsung mengarahkan mahasiswa ke Google Form resmi dari Komkordik."
                tags={['HTML', 'CSS', 'JavaScript']}
                image={sisInfoPhoto}
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">Skills & Bahasa Pemrograman</h2>
          </SectionReveal>
          <div className="skills-grid">
            <SectionReveal delay={0.2}>
              <SkillCategory
                title="Frontend"
                skills={['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Nuxt.js', 'Tailwind CSS', 'Bootstrap', 'Kotlin', 'Java']}
              />
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <SkillCategory
                title="Backend"
                skills={['Node.js', 'TypeScript', 'Python', 'PHP']}
              />
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <SkillCategory
                title="Database"
                skills={['MySQL', 'Prisma', 'Firebase']}
              />
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <SkillCategory
                title="Tools & Others"
                skills={['Git', 'GitHub', 'Docker', 'Figma', 'VS Code']}
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="section">
        <div className="container">
          <SectionReveal>
            <h2 className="section-title">Sertifikat</h2>
          </SectionReveal>
          <div className="certificates-grid">
            <SectionReveal delay={0.2}>
              <CertificateCard
                title="Vue.js Certification"
                issuer="Programmer Zaman Now"
                date="Juli 2025"
                credentialId="cert_j6qsm4xm"
                description="Sertifikasi yang memvalidasi pemahaman mendalam tentang Vue.js framework, termasuk komponen, routing, state management, dan best practices dalam pengembangan aplikasi web modern menggunakan Vue.js."
                image={vueJsCertPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <CertificateCard
                title="Guide to Learn SQL with AI at DQLab"
                issuer="DQLab"
                date="Mei 2025"
                credentialId="#DQLABAI003DJCLVI"
                description="Sertifikasi yang menunjukkan kemampuan dalam mempelajari SQL dengan bantuan AI, mencakup query optimization, database management, dan penggunaan AI tools untuk meningkatkan efisiensi dalam bekerja dengan database."
                image={dqlabSqlCertPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.4}>
              <CertificateCard
                title="Introduction to Data Science with Python"
                issuer="DQLab"
                date="Mei 2025"
                credentialId="#DQLABINTP1RCNEGL"
                description="Sertifikasi yang memvalidasi pemahaman dasar tentang Data Science menggunakan Python, mencakup data analysis, visualization, pandas, numpy, dan fundamental concepts dalam pengolahan dan analisis data."
                image={dqlabPythonCertPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.5}>
              <CertificateCard
                title="Huawei Talent Academy AI Course"
                issuer="Huawei"
                date="Mei 2024"
                credentialId="EBG20240510001364"
                description="Sertifikasi dari Huawei Talent Academy yang memvalidasi pemahaman tentang Artificial Intelligence, mencakup machine learning fundamentals, AI applications, dan teknologi AI terkini dari Huawei."
                image={huaweiCertPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.6}>
              <CertificateCard
                title="Python Intermediate"
                issuer="Sololearn"
                date="Mei 2024"
                credentialId="CC-KACISVHA"
                description="Sertifikasi tingkat intermediate dalam Python programming dari Sololearn, mencakup advanced concepts seperti OOP, decorators, generators, file handling, dan best practices dalam Python development."
                image={pythonIntermediateCertPhoto}
              />
            </SectionReveal>
            <SectionReveal delay={0.7}>
              <CertificateCard
                title="Introduction to Python"
                issuer="Sololearn"
                date="Maret 2024"
                credentialId="CC-C4EZEUNQ"
                description="Sertifikasi fundamental Python programming dari Sololearn, mencakup basic syntax, data types, control structures, functions, dan foundational concepts untuk memulai programming dengan Python."
                image={introPythonCertPhoto}
              />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Rifqah Aulia Salsabilla. All rights reserved.</p>
            <div className="social-links">
              <a href="https://github.com/rifqahaulia" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/rifqah-aulia-salsabilla-324344336/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="mailto:rifqahauliasalsabilla25@gmail.com">Email</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Timeline Item Component
function TimelineItem({ title, date, description, location, responsibilities }) {
  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h4>{title}</h4>
        <p className="timeline-date">{date}</p>
        {location && <p className="timeline-location">{location}</p>}
        {description && <p>{description}</p>}
        {responsibilities && (
          <ul className="timeline-list">
            {responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

// Project Card Component
function ProjectCard({ title, description, tags, githubLink, image }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image || "https://via.placeholder.com/400x200"} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        {githubLink && (
          <div className="project-links">
            <a href={githubLink} className="project-link">GitHub</a>
          </div>
        )}
      </div>
    </div>
  )
}

// Skill Category Component
function SkillCategory({ title, skills }) {
  return (
    <div className="skill-category">
      <h3>{title}</h3>
      <div className="skill-items">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

// Certificate Card Component
function CertificateCard({ title, issuer, date, credentialId, description, credentialUrl, image }) {
  return (
    <div className="certificate-card">
      {image && (
        <div className="certificate-image">
          <img src={image} alt={title} />
        </div>
      )}
      <div className="certificate-content">
        <h3>{title}</h3>
        <p className="certificate-issuer">{issuer}</p>
        <p className="certificate-date">{date}</p>
        {credentialId && (
          <p className="certificate-id">ID Kredensial: {credentialId}</p>
        )}
        {description && (
          <p className="certificate-description">{description}</p>
        )}
        {credentialUrl && (
          <a href={credentialUrl} target="_blank" rel="noopener noreferrer" className="certificate-link">
            Lihat Kredensial
          </a>
        )}
      </div>
    </div>
  )
}

export default App
