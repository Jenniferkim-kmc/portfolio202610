import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { EMAIL, PHONE, about, heroPic, intro, works } from "./content";
import {
  certifications,
  education,
  experience,
  internship,
  projectWork,
  type Entry,
} from "@/components/Experience";
import styles from "./growth.module.css";

export const metadata: Metadata = {
  title: "김유정 (Jennifer Kim) — Growth Product Manager",
  description: "Growth Product Manager 김유정(Jennifer Kim)의 포트폴리오.",
};

// 경력 한 묶음: 왼쪽 기간, 오른쪽 회사·직무·퇴사 사유·요약·세부 내용 (기존 포트폴리오와 같은 내용)
function CareerGroup({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <div className={styles.careerGroup}>
      <h2 className={styles.h2}>{title}</h2>
      <ul className={styles.careerList}>
        {entries.map((e) => (
          <li key={`${e.period}-${e.title}`} className={styles.careerRow}>
            <div className={styles.careerWhen}>
              <span>{e.period}</span>
              {e.tag && <span>{e.tag}</span>}
            </div>
            <div>
              <h3 className={styles.careerTitle}>
                {e.href ? <Link href={e.href}>{e.title}</Link> : e.title}
              </h3>
              {e.meta && <p className={styles.careerMeta}>{e.meta}</p>}
              {e.note && <p className={styles.careerNote}>{e.note}</p>}
              {e.summary && <p className={styles.careerSummary}>{e.summary}</p>}
              {e.details && (
                <ul className={styles.careerDetails}>
                  {e.details.map((d) =>
                    typeof d === "string" ? (
                      <li key={d}>{d}</li>
                    ) : (
                      <li key={d.text}>
                        <strong>{d.text}</strong>
                        <ul>
                          {d.sub.map((s) => (
                            <li key={s}>{s}</li>
                          ))}
                        </ul>
                      </li>
                    ),
                  )}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function GrowthHome() {
  return (
    <div className={styles.root}>
      <header className={styles.top}>
        <Link href="/growth">김유정 — GROWTH PRODUCT MANAGER</Link>
        <nav>
          <a href="#work">WORK</a>
          <a href="#experience">EXPERIENCE</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </header>

      <h1 className={styles.wordmark}>JENNIFER KIM</h1>

      <section className={styles.lead}>
        <figure className={styles.leadPic}>
          <Image src={heroPic.src} width={heroPic.width} height={heroPic.height} alt={heroPic.alt} priority sizes="(max-width: 760px) 100vw, 640px" />
        </figure>
        <div className={styles.leadText}>
          <p className={styles.statement}>
            데이터로 문제를 찾고,
            <br />
            숫자로 증명하는 그로스 PM
          </p>
          <div>
            <p className={styles.body}>{intro}</p>
            <p className={styles.body} style={{ marginTop: 16 }}>
              {about[1]}
            </p>
            <a href="#work" className={styles.outline}>
              프로젝트 보기 →
            </a>
          </div>
        </div>
      </section>

      <hr className={styles.rule} />

      <section id="work" className={styles.section}>
        <h2 className={styles.h2}>SELECTED WORK</h2>
        {works.map((w) => (
          <Link key={w.slug} href={w.href} className={styles.work}>
            <div className={styles.workText}>
              <div className={styles.workKicker}>
                <span>{w.category}</span>
                <span>{w.year}</span>
              </div>
              <h3 className={styles.workTitle}>{w.title}</h3>
              <p>{w.summary}</p>
              {w.metric && (
                <div className={styles.metric}>
                  {w.metric.value}
                  <small>{w.metric.label}</small>
                </div>
              )}
              <span className={styles.more}>케이스 스터디 보기 →</span>
            </div>
            <div className={`${styles.workPics} ${styles[w.kind]}`}>
              {w.pics.map((pic) => (
                <figure key={pic.src} className={styles.pic}>
                  {pic.label && <figcaption>{pic.label}</figcaption>}
                  <Image src={pic.src} width={pic.width} height={pic.height} alt={pic.alt} sizes="(max-width: 760px) 90vw, 420px" />
                </figure>
              ))}
            </div>
          </Link>
        ))}
      </section>

      <hr className={styles.rule} />

      <section id="experience" className={styles.section}>
        <CareerGroup title="EXPERIENCE" entries={experience} />
        <CareerGroup title="PROJECTS / INTERNSHIP" entries={[...projectWork, ...internship]} />
        <CareerGroup title="EDUCATION" entries={education} />
        <CareerGroup title="CERTIFICATION" entries={certifications} />
      </section>

      <footer id="contact" className={styles.contact}>
        <p className={styles.contactBig}>LET&apos;S WORK TOGETHER</p>
        <div className={styles.contactRow}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href={`tel:${PHONE}`}>{PHONE}</a>
        </div>
        <p className={styles.copy}>© 2026 김유정 (Jennifer Kim)</p>
      </footer>
    </div>
  );
}
