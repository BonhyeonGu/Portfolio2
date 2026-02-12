import React, { useState, useEffect } from 'react';
import './index.css';

// --- 이미지 파일 import ---
import profileImg from './assets/profile.png';

import slideImg1 from './assets/slide1.png';
import slideImg2 from './assets/slide2.png'; 
import slideImg3 from './assets/slide1.png'; 

import projectImg1 from './assets/project1.png';
import projectImg2 from './assets/project2.png';
import projectImg3 from './assets/project3.png'; 
import projectImg4 from './assets/project4.png'; 

// --- 데이터 설정 ---

const profile = {
  nameKo: "구본현",
  nameEn: "Bon-Hyeon Gu",
  role: "Ph.D. Candidate / Researcher",
  email: "bonhyeon.gu@9bon.org", 
  github: "https://github.com/BonhyeonGu/",
  orcid: "https://orcid.org/0009-0004-3256-7949/",
  avatar: profileImg,
};

const slideImages = [slideImg1, slideImg2, slideImg3];

const papers = [
  { 
    id: 1, 
    type: "Journal", 
    title: "Observation-Metadata-Centric Digital Twin Ontology for Heterogeneous MultiSensor Data in Smart Cities", 
    journal: "IEEE Internet of Things Journal",
    year: "2026", 
    link: "https://doi.org/10.1109/JIOT.2026.3661277" 
  },
  { 
    id: 2, 
    type: "Patent", 
    title: "Apparatus for Processing Sensor Metadata with Open Standard-based Ontology", 
    journal: "KR Patent (Pending)",
    year: "2024", 
    link: "#" 
  },
  { 
    id: 3, 
    type: "Journal", 
    title: "A Digital Twin Ontology Based on Open Standards for Integrating Heterogeneous Smart City Metadata", 
    journal: "Journal of Korea Multimedia Society",
    year: "2024", 
    link: "https://doi.org/10.9717/kmms.2024.27.11.1326" 
  },
];

const projects = [
  { 
    id: 1, 
    year: "2025 (Ongoing)",
    title: "과제: Digital Columbus Project", 
    desc: "디지털 트윈을 위한 다중 도메인 온톨로지 구축 및 동적 지식 그래프(DKG) 기반 RAG, Neural-symbolic AI 개발",
    img: projectImg4, 
  },
  { 
    id: 2, 
    year: "2022 - 2024",
    title: "과제: DT Testbed Establishment", 
    desc: "부산 에코델타시티 관제 플랫폼을 위한 온톨로지(TBox/ABox) 모델링 및 실시간 추론 서비스 구현",
    img: projectImg3, 
  },
  { 
    id: 3, 
    year: "2022",
    title: "졸업작품대회 1위", 
    desc: "멀티모달 데이터를 활용한 유튜브 영상 지식 추론 시스템 개발",
    img: projectImg2, 
  },
  { 
    id: 4, 
    year: "2014",
    title: "부산지방기능경기대회 2위", 
    desc: "리눅스(Quagga/Iptables) 및 윈도우 서버(AD/DNS) 기반 보안 네트워크망 구축 및 망 분리 설계",
    img: projectImg1, 
  },
];

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [copyStatus, setCopyStatus] = useState("Copy");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, [isMobile]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopyStatus("Copied!"); 
      setTimeout(() => setCopyStatus("Copy"), 2000); 
    });
  };

  // ----------------------------------------------------------------
  // [모바일 렌더링]
  // ----------------------------------------------------------------
  if (isMobile) {
    return (
      <div style={mobileStyles.container}>
        <header style={mobileStyles.profileSection}>
          <img src={profile.avatar} alt="Profile" style={mobileStyles.avatar} />
          <h1 style={mobileStyles.nameKo}>{profile.nameKo}</h1>
          <h2 style={mobileStyles.nameEn}>{profile.nameEn}</h2>
          <p style={mobileStyles.role}>{profile.role}</p>
          
          <div style={mobileStyles.contactBox} onClick={handleCopyEmail}>
            <span style={{marginRight: '8px'}}>{profile.email}</span>
            <span style={{
              fontSize: '0.7rem', 
              color: copyStatus === "Copied!" ? "#4caf50" : "#999",
              fontWeight: 'bold'
            }}>{copyStatus}</span>
          </div>

          <div style={mobileStyles.links}>
            <a href={profile.github} target="_blank" rel="noreferrer" style={mobileStyles.linkItem}>GitHub</a>
            <span style={{color:'#ddd'}}>|</span>
            <a href={profile.orcid} target="_blank" rel="noreferrer" style={mobileStyles.linkItem}>ORCID</a>
          </div>
        </header>

        <section style={mobileStyles.section}>
          <h3 style={mobileStyles.sectionTitle}>Publications</h3>
          <div style={mobileStyles.paperList}>
            {papers.map((paper) => {
              const isPatent = paper.type === "Patent";
              return (
                <div key={paper.id} style={mobileStyles.paperCard}>
                  {isPatent ? (
                     <div style={{textDecoration:'none', color:'inherit'}}>
                       <div style={mobileStyles.paperHeader}>
                         <span style={mobileStyles.paperType}>{paper.type}</span>
                         <span style={mobileStyles.paperYear}>{paper.year}</span>
                       </div>
                       <div style={mobileStyles.paperTitle}>{paper.title}</div>
                       <div style={mobileStyles.paperJournal}>{paper.journal}</div>
                     </div>
                  ) : (
                    <a href={paper.link} target="_blank" rel="noreferrer" style={{textDecoration:'none', color:'inherit'}}>
                       <div style={mobileStyles.paperHeader}>
                         <span style={mobileStyles.paperType}>{paper.type}</span>
                         <span style={mobileStyles.paperYear}>{paper.year}</span>
                       </div>
                       <div style={mobileStyles.paperTitle}>{paper.title} ↗</div>
                       <div style={mobileStyles.paperJournal}>{paper.journal}</div>
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section style={mobileStyles.section}>
          <h3 style={mobileStyles.sectionTitle}>Projects</h3>
          <div style={mobileStyles.projectList}>
            {projects.map((project) => (
              <div key={project.id} style={mobileStyles.projectCard}>
                <div style={mobileStyles.projectImgWrapper}>
                  <img src={project.img} alt={project.title} style={mobileStyles.projectImg} />
                  <div style={mobileStyles.projectOverlay}>
                    <span style={mobileStyles.projectYear}>{project.year}</span>
                    <span style={mobileStyles.projectTitle}>{project.title}</span>
                  </div>
                </div>
                <div style={mobileStyles.projectDescBox}>
                  {project.desc}
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer style={mobileStyles.footer}>
          © 2026 {profile.nameEn}
        </footer>
      </div>
    );
  }

  // ----------------------------------------------------------------
  // [데스크탑 렌더링]
  // ----------------------------------------------------------------
  return (
    <div style={styles.container}>
      <style>
        {`
          .project-card .project-overlay {
            background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, transparent 100%);
            transition: background 0.3s ease;
          }
          .project-card:hover .project-overlay {
            background: rgba(0, 0, 0, 0.95);
          }
          .project-card .project-desc {
            max-height: 0;
            opacity: 0;
            overflow: hidden;
            margin-top: 0;
            transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            font-size: 0.85rem; /* 글자 크기 약간 축소 */
            line-height: 1.5;
            font-weight: 300;
            color: #ccc;
            word-break: keep-all; 
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .project-card:hover .project-desc {
            max-height: 120px;
            opacity: 1;
            margin-top: 10px; /* 간격 축소 */
            padding-top: 10px; /* 간격 축소 */
            border-top: 1px solid rgba(255,255,255,0.15);
          }
        `}
      </style>

      <div style={styles.contentWrapper}>
        <aside style={styles.sidebar}>
          <div style={styles.profileWrapper}>
            <div style={styles.avatarContainer}>
              <img src={profile.avatar} alt="Profile" style={styles.avatar} />
            </div>
            <div style={styles.nameGroup}>
              <h1 style={styles.nameKo}>{profile.nameKo}</h1>
              <h2 style={styles.nameEn}>{profile.nameEn}</h2>
              <p style={styles.role}>{profile.role}</p>
            </div>
            <div style={styles.contactGroup}>
              <div style={styles.emailContainer} onClick={handleCopyEmail}>
                <span style={styles.emailText}>{profile.email}</span>
                <span style={{
                  ...styles.copyBadge,
                  color: copyStatus === "Copied!" ? "#4caf50" : "#999",
                  fontWeight: copyStatus === "Copied!" ? "bold" : "normal",
                }}>
                  {copyStatus}
                </span>
              </div>
              <div style={styles.iconLinks}>
                <a href={profile.github} target="_blank" rel="noreferrer" style={styles.iconLink}>GitHub</a>
                <a href={profile.orcid} target="_blank" rel="noreferrer" style={styles.iconLink}>ORCID</a>
              </div>
            </div>
          </div>
          <div style={styles.copyright}>© 2026 {profile.nameEn}</div>
        </aside>

        <main style={styles.mainContent}>
          <section style={styles.sectionSlide}>
            {slideImages.map((src, index) => (
              <div
                key={index}
                style={{
                  ...styles.slideImageWrapper,
                  opacity: index === currentSlide ? 1 : 0,
                  zIndex: index === currentSlide ? 1 : 0,
                }}
              >
                <img src={src} alt={`Slide ${index}`} style={styles.slideImage} />
              </div>
            ))}
          </section>

          <section style={styles.sectionPapers}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>Publications & Patents</h3>
              <span style={styles.line}></span>
            </div>
            <div style={styles.paperList}>
              {papers.map((paper) => {
                const isPatent = paper.type === "Patent";
                return isPatent ? (
                  <div key={paper.id} style={{ ...styles.paperRow, cursor: 'default' }}>
                    <div style={styles.paperMeta}>
                      <span style={styles.paperYear}>{paper.year}</span>
                      <span style={styles.paperType}>{paper.type}</span>
                    </div>
                    <div style={styles.paperInfo}>
                      <span style={styles.paperTitle}>{paper.title}</span>
                      <span style={styles.paperJournal}>{paper.journal}</span>
                    </div>
                  </div>
                ) : (
                  <a key={paper.id} href={paper.link} target="_blank" rel="noreferrer" style={styles.paperRow}>
                    <div style={styles.paperMeta}>
                      <span style={styles.paperYear}>{paper.year}</span>
                      <span style={styles.paperType}>{paper.type}</span>
                    </div>
                    <div style={styles.paperInfo}>
                      <span style={styles.paperTitle}>{paper.title}</span>
                      <span style={styles.paperJournal}>{paper.journal}</span>
                    </div>
                    <div style={styles.paperArrow}>↗</div>
                  </a>
                );
              })}
            </div>
          </section>

          <section style={styles.sectionProjects}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>Projects</h3>
              <span style={styles.line}></span>
            </div>
            <div style={styles.projectRow}>
              {projects.map((project) => (
                <div key={project.id} style={styles.projectCard} className="project-card">
                  <img src={project.img} alt={project.title} style={styles.projectBg} />
                  <div style={styles.projectOverlay} className="project-overlay">
                    <span style={styles.projectYear}>{project.year}</span>
                    <span style={styles.projectTitle}>{project.title}</span>
                    <span className="project-desc">{project.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

// =================================================================
// [스타일 정의]
// =================================================================

const mobileStyles = {
  container: {
    padding: '20px',
    backgroundColor: '#f4f6f8',
    height: '100vh',        
    overflowY: 'auto',      
    WebkitOverflowScrolling: 'touch', 
    fontFamily: "'KoPubWorld Dotum', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    boxSizing: 'border-box',
  },
  profileSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '30px 20px',
    borderRadius: '16px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    flexShrink: 0, 
  },
  avatar: {
    width: '100px', height: '100px', borderRadius: '50%', marginBottom: '15px', objectFit: 'cover',
    border: '1px solid #eee'
  },
  nameKo: { fontSize: '1.6rem', fontWeight: '500', margin: '0 0 5px 0', color: '#111' },
  nameEn: { fontSize: '1rem', fontWeight: '300', margin: '0 0 10px 0', color: '#555' },
  role: { fontSize: '0.8rem', color: '#888', margin: 0, fontWeight: '300' },
  contactBox: {
    marginTop: '15px', padding: '8px 15px', backgroundColor: '#f9f9f9', borderRadius: '8px',
    fontSize: '0.85rem', color: '#444', display: 'flex', alignItems: 'center'
  },
  links: { marginTop: '15px', display: 'flex', gap: '15px', fontSize: '0.9rem' },
  linkItem: { textDecoration: 'none', color: '#666' },

  section: { display: 'flex', flexDirection: 'column', gap: '15px', flexShrink: 0 },
  sectionTitle: { fontSize: '1.2rem', fontWeight: '600', color: '#333', margin: '0 0 5px 0', borderLeft: '4px solid #4caf50', paddingLeft: '10px' },
  
  paperList: { display: 'flex', flexDirection: 'column', gap: '10px' },
  paperCard: {
    backgroundColor: '#fff', padding: '15px', borderRadius: '12px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  },
  paperHeader: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.75rem' },
  paperType: { fontWeight: 'bold', color: '#4caf50' },
  paperYear: { color: '#888' },
  paperTitle: { fontSize: '0.95rem', fontWeight: '500', marginBottom: '5px', lineHeight: '1.4', wordBreak: 'keep-all' },
  paperJournal: { fontSize: '0.8rem', color: '#666' },

  projectList: { display: 'flex', flexDirection: 'column', gap: '20px' },
  projectCard: {
    backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden',
    boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
  },
  projectImgWrapper: { position: 'relative', width: '100%', height: '135px' },
  projectImg: { width: '100%', height: '100%', objectFit: 'cover' },
  projectOverlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0, top: 0,
    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
    display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
    padding: '15px'
  },
  projectYear: { color: '#4caf50', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '4px' },
  projectTitle: { color: '#fff', fontSize: '1rem', fontWeight: '600', wordBreak: 'keep-all' },
  projectDescBox: {
    padding: '15px', fontSize: '0.85rem', color: '#555', lineHeight: '1.5',
    borderTop: '1px solid #eee', wordBreak: 'keep-all'
  },
  footer: { textAlign: 'center', color: '#aaa', fontSize: '0.8rem', padding: '20px 0', flexShrink: 0 }
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#eef1f5',
    fontFamily: "'KoPubWorld Dotum', sans-serif",
  },
  contentWrapper: {
    display: 'flex',
    width: '94%',
    maxWidth: '1600px',
    height: '92vh',
    backgroundColor: '#f4f6f8',
    borderRadius: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.02)',
    overflow: 'hidden',
  },
  sidebar: {
    width: '280px',
    height: '100%',
    backgroundColor: '#fff',
    padding: '40px 25px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRight: '1px solid #e0e0e0',
    zIndex: 10,
  },
  profileWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '20px',
  },
  avatarContainer: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    padding: '5px',
    border: '1px solid #ddd',
    marginBottom: '25px',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  nameGroup: { marginBottom: '30px' },
  nameKo: { fontSize: '2rem', fontWeight: '500', margin: '0', color: '#111', letterSpacing: '-1px' },
  nameEn: { fontSize: '1.1rem', fontWeight: '300', margin: '5px 0 10px 0', color: '#555' },
  role: { fontSize: '0.85rem', color: '#888', margin: 0, fontWeight: '300' },
  contactGroup: { width: '100%', display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' },
  emailContainer: { display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer', padding: '5px', userSelect: 'none' },
  emailText: { fontSize: '0.9rem', color: '#444' },
  copyBadge: { fontSize: '0.75rem', transition: 'all 0.3s ease' },
  iconLinks: { display: 'flex', justifyContent: 'center', gap: '20px' },
  iconLink: { color: '#666', textDecoration: 'none', fontSize: '0.9rem', borderBottom: '1px solid transparent', transition: 'all 0.2s' },
  copyright: { fontSize: '0.75rem', color: '#aaa', textAlign: 'center' },
  
  // [수정됨] 메인 콘텐츠 여백 및 갭 축소
  mainContent: { flex: 1, display: 'flex', flexDirection: 'column', padding: '25px', gap: '15px', boxSizing: 'border-box' },
  
  // [수정됨] 슬라이드 높이 비중 축소 (1.6 -> 1.2), 최소 높이 축소 (220 -> 180)
  sectionSlide: { flex: '1.2 1 0', position: 'relative', borderRadius: '16px', overflow: 'hidden', backgroundColor: '#000', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', minHeight: '180px' },
  slideImageWrapper: { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', transition: 'opacity 1s ease-in-out' },
  slideImage: { width: '100%', height: '100%', objectFit: 'cover' },
  
  // [수정됨] 논문 섹션 패딩 축소
  sectionPapers: { flex: '0.8 1 0', backgroundColor: '#fff', borderRadius: '16px', padding: '15px 25px', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', display: 'flex', flexDirection: 'column', minHeight: '140px' },
  sectionHeader: { display: 'flex', alignItems: 'center', marginBottom: '15px', gap: '15px' },
  sectionTitle: { fontSize: '1.1rem', fontWeight: '500', margin: 0, color: '#333', whiteSpace: 'nowrap' },
  line: { flex: 1, height: '1px', backgroundColor: '#eee' },
  paperList: { display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', height: '100%' },
  paperRow: { display: 'flex', alignItems: 'center', textDecoration: 'none', padding: '10px 0', borderRadius: '8px', color: '#333', gap: '0' },
  paperMeta: { display: 'flex', flexDirection: 'column', width: '80px', minWidth: '80px', textAlign: 'center', borderRight: '2px solid #eee', paddingRight: '15px', marginRight: '20px', flexShrink: 0 },
  paperYear: { fontWeight: '500', fontSize: '0.95rem', color: '#222' },
  paperType: { fontSize: '0.7rem', color: '#888', textTransform: 'uppercase', marginTop: '2px' },
  paperInfo: { display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' },
  paperTitle: { fontSize: '0.95rem', fontWeight: '500', marginBottom: '4px', color: '#111', whiteSpace: 'normal', wordBreak: 'keep-all', lineHeight: '1.4' },
  paperJournal: { fontSize: '0.8rem', color: '#777', fontWeight: '300', whiteSpace: 'normal' },
  paperArrow: { fontSize: '1rem', color: '#ddd', marginLeft: '10px' },
  
  // [수정됨] 프로젝트 섹션 flex 비율 조정 (하단 잘림 방지)
  sectionProjects: { flex: '1.0 1 0', display: 'flex', flexDirection: 'column', minHeight: '140px' },
  projectRow: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', height: '100%' },
  projectCard: { position: 'relative', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', cursor: 'default', backgroundColor: '#fff' },
  projectBg: { width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s' },
  projectOverlay: { position: 'absolute', bottom: 0, left: 0, right: 0, top: 0, padding: '20px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' },
  projectYear: { fontSize: '0.85rem', fontWeight: '700', color: '#4caf50', marginBottom: '6px', letterSpacing: '0.5px', textTransform: 'uppercase' },
  projectTitle: { fontSize: '1.1rem', fontWeight: '600', lineHeight: '1.3', color: '#fff', marginBottom: '0', wordBreak: 'keep-all' }
};

export default Portfolio;