import React, { useState, useEffect } from 'react';
import './index.css';

// --- 이미지 파일 import ---
import profileImg from './assets/profile.png';

import slideImg1 from './assets/slide3.png';
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
    link: "#" // 링크 제거 로직에 의해 사용되지 않음
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
    title: "Digital Columbus Project 과제참가", 
    desc: "디지털 트윈을 위한 다중 도메인 온톨로지 구축 및 동적 지식 그래프(DKG) 기반 RAG, Neural-symbolic AI 개발",
    img: projectImg4, 
  },
  { 
    id: 2, 
    year: "2022 - 2024",
    title: "Digital Twin Testbed Establishment 과제참가", 
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 4500); 
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email).then(() => {
      setCopyStatus("Copied!"); 
      setTimeout(() => setCopyStatus("Copy"), 2000); 
    });
  };

  return (
    <div style={styles.container}>
      {/* CSS 스타일 주입 */}
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
            
            font-size: 0.9rem;
            line-height: 1.6;
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
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid rgba(255,255,255,0.15);
          }
        `}
      </style>

      {/* 내부 콘텐츠 래퍼 */}
      <div style={styles.contentWrapper}>
        
        {/* 사이드바 */}
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

        {/* 메인 콘텐츠 */}
        <main style={styles.mainContent}>
          
          {/* 1. 슬라이드쇼 */}
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
            {/* [수정됨] Featured Works 뱃지 제거 */}
          </section>

          {/* 2. 논문 리스트 */}
          <section style={styles.sectionPapers}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>Publications & Patents</h3>
              <span style={styles.line}></span>
            </div>
            <div style={styles.paperList}>
              {papers.map((paper) => {
                // [수정됨] 특허(Patent) 여부 확인
                const isPatent = paper.type === "Patent";
                
                // 특허면 div (클릭불가), 아니면 a (링크)
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
                    {/* 특허는 화살표 아이콘 제거 */}
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

          {/* 3. 프로젝트 */}
          <section style={styles.sectionProjects}>
            <div style={styles.sectionHeader}>
              <h3 style={styles.sectionTitle}>Selected Projects</h3>
              <span style={styles.line}></span>
            </div>
            <div style={styles.projectRow}>
              {projects.map((project) => (
                <div 
                  key={project.id} 
                  style={styles.projectCard}
                  className="project-card"
                >
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

const styles = {
  // --- 바깥쪽 컨테이너 ---
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

  // --- 중앙 집중형 콘텐츠 래퍼 ---
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

  // --- 사이드바 ---
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
  nameGroup: {
    marginBottom: '30px',
  },
  nameKo: {
    fontSize: '2rem',
    fontWeight: '500',
    margin: '0',
    color: '#111',
    letterSpacing: '-1px',
  },
  nameEn: {
    fontSize: '1.1rem',
    fontWeight: '300',
    margin: '5px 0 10px 0',
    color: '#555',
  },
  role: {
    fontSize: '0.85rem',
    color: '#888',
    margin: 0,
    fontWeight: '300',
  },
  contactGroup: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  },
  emailContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    cursor: 'pointer',
    padding: '5px', 
    userSelect: 'none', 
  },
  emailText: {
    fontSize: '0.9rem',
    color: '#444',
  },
  copyBadge: {
    fontSize: '0.75rem',
    transition: 'all 0.3s ease',
  },
  iconLinks: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  iconLink: {
    color: '#666',
    textDecoration: 'none',
    fontSize: '0.9rem',
    borderBottom: '1px solid transparent',
    transition: 'all 0.2s',
  },
  copyright: {
    fontSize: '0.75rem',
    color: '#aaa',
    textAlign: 'center',
  },

  // --- 메인 콘텐츠 ---
  mainContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
    gap: '25px',
    boxSizing: 'border-box',
  },

  // 1. 슬라이드 섹션
  sectionSlide: {
    flex: '1.6', 
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundColor: '#000',
    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  slideImageWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    transition: 'opacity 1s ease-in-out',
  },
  slideImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  // slideOverlay 및 slideBadge 스타일은 사용하지 않으므로 삭제해도 되지만
  // 혹시 모를 재사용을 위해 남겨두거나 삭제하셔도 무방합니다. (위 JSX에서는 사용 안 함)
  slideOverlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    zIndex: 10,
  },
  slideBadge: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    color: '#000',
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '0.8rem',
    fontWeight: '500',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },

  // 2. 논문 섹션
  sectionPapers: {
    flex: '1.0', 
    backgroundColor: '#fff',
    borderRadius: '16px',
    padding: '20px 30px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
    display: 'flex',
    flexDirection: 'column',
  },
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    gap: '15px',
  },
  sectionTitle: {
    fontSize: '1.1rem',
    fontWeight: '500',
    margin: 0,
    color: '#333',
    whiteSpace: 'nowrap',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#eee',
  },
  paperList: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly', 
    height: '100%', 
  },
  paperRow: {
    display: 'flex',
    alignItems: 'center', 
    textDecoration: 'none',
    padding: '10px 0', 
    borderRadius: '8px',
    color: '#333',
    gap: '0', 
  },
  paperMeta: {
    display: 'flex',
    flexDirection: 'column',
    width: '80px',      
    minWidth: '80px',   
    textAlign: 'center',
    borderRight: '2px solid #eee',
    paddingRight: '15px', 
    marginRight: '20px',  
    flexShrink: 0,        
  },
  paperYear: {
    fontWeight: '500',
    fontSize: '0.95rem',
    color: '#222',
  },
  paperType: {
    fontSize: '0.7rem',
    color: '#888',
    textTransform: 'uppercase',
    marginTop: '2px',
  },
  paperInfo: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
  },
  paperTitle: {
    fontSize: '0.95rem',
    fontWeight: '500',
    marginBottom: '4px',
    color: '#111',
    whiteSpace: 'normal', 
    wordBreak: 'keep-all', 
    lineHeight: '1.4', 
  },
  paperJournal: {
    fontSize: '0.8rem',
    color: '#777',
    fontWeight: '300',
    whiteSpace: 'normal', 
  },
  paperArrow: {
    fontSize: '1rem',
    color: '#ddd',
    marginLeft: '10px',
  },

  // 3. 프로젝트 섹션
  sectionProjects: {
    flex: '1.0', 
    display: 'flex',
    flexDirection: 'column',
  },
  projectRow: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '20px',
    height: '100%',
  },
  projectCard: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
    cursor: 'default', 
    backgroundColor: '#fff', 
  },
  projectBg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.4s',
  },
  projectOverlay: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0, top: 0, 
    padding: '25px', 
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end', 
  },
  projectYear: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: '#4caf50', 
    marginBottom: '6px',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  projectTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
    lineHeight: '1.3',
    color: '#fff',
    marginBottom: '0', 
    wordBreak: 'keep-all', 
  }
};

export default Portfolio;