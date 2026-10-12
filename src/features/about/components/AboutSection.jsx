import { SectionHeading } from "@shared/components";
import { photos } from "@shared/data/photos";
import styles from "./AboutSection.module.css";

const collage = [photos.empada, photos.paoComOvo, photos.coxinha, photos.cafe];

export function AboutSection() {
  return (
    <section id="sobre" className={`section ${styles.about}`}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.collage}>
          {collage.map((photo) => (
            <img
              key={photo.src}
              className={styles.tile}
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
            />
          ))}
        </div>
        <div>
          <SectionHeading
            eyebrow="Nossa história"
            title="Bem de bairro, do jeito que tem que ser"
            align="left"
          />
          <p className={styles.text}>
            Tudo de Bom Alimentos Comida boa, feita com carinho e do jeitinho
            que a gente gosta! Trazendo a experiência ao prazer de servir comida
            boa, fresquinha e preparada com capricho.
          </p>
          <p className={styles.text}>
            Valorizamos os produtores locais e damos preferência a ingredientes
            fornecidos pela nossa região. E tem um detalhe que faz toda a
            diferença: nossos salgados são produzidos aqui mesmo, com dedicação
            e cuidado em cada etapa.
          </p>
          <p className={styles.text}>
            Nosso compromisso é simples: oferecer qualidade, sabor e aquele
            atendimento acolhedor que faz você se sentir em casa. Porque, pra
            nós, comida boa vai muito além do prato. É carinho, confiança e
            vontade de voltar sempre! Tudo de Bom Alimentos: chegou, pediu,
            gostou!
          </p>
        </div>
      </div>
    </section>
  );
}
