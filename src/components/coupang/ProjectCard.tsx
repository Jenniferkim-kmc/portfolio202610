import Link from "next/link";
import ZoomableImage from "@/components/ZoomableImage";
import type { Feature } from "@/data/coupangContent";
import type { Project } from "@/data/projects";
import Badge from "./Badge";
import styles from "./coupang.module.css";

export default function ProjectCard({
  index,
  project,
  feature,
}: {
  index: number;
  project: Project;
  feature: Feature;
}) {
  const detail = project.detail;
  const href = `/coupang/work/${project.slug}`;
  const wide = feature.pics.every((pic) => pic.width > pic.height);

  return (
    <article className={styles.project}>
      <div className={styles.projectBody}>
        <div className={styles.projectTop}>
          <span className={styles.rank}>{String(index + 1).padStart(2, "0")}</span>
          <Badge tone={feature.evidence.tone}>{feature.evidence.label}</Badge>
          <span className={styles.tag}>{feature.team}</span>
        </div>
        <h3 className={styles.projectTitle}>
          <Link href={href}>{project.title}</Link>
        </h3>
        <p className={styles.problem}>{feature.problem}</p>
        <dl className={styles.meta}>
          <dt>유형</dt>
          <dd>{feature.type}</dd>
          {detail && (
            <>
              <dt>기간</dt>
              <dd>{detail.period}</dd>
              <dt>역할</dt>
              <dd>{detail.role}</dd>
              <dt>산출물</dt>
              <dd>{detail.deliverables}</dd>
            </>
          )}
        </dl>
        <ul className={styles.contribs} aria-label="주요 기여">
          {feature.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className={styles.projectActions}>
          <Link href={href} className={styles.textLink}>
            케이스 스터디 보기 →
          </Link>
        </div>
      </div>
      <div className={`${styles.shot} ${wide ? styles.shotWide : ""}`}>
        {feature.pics.map((pic) => (
          <ZoomableImage
            key={pic.src}
            src={pic.src}
            width={pic.width}
            height={pic.height}
            alt={pic.alt}
            sizes="(max-width: 960px) 45vw, 260px"
            buttonClassName={wide ? "block w-full" : "contents"}
          />
        ))}
        <p className={styles.shotCaption}>기획 단계에서 만든 동작 화면 · 누르면 크게 보기</p>
      </div>
    </article>
  );
}
