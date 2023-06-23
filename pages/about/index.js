import * as React from "react";
import styles from "./about.module.css";

import Image from "next/image";

import { motion } from "framer-motion";
import InsightCard from "@/components/InsightCard";
import GoBackButton from "@/components/varied/GoBackButton";

import { insightList } from "@/data/insights";
import LegendText from "@/components/varied/LegendText";

const About = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.4,
          type: "spring",
          stiffness: 400,
          damping: 75,
        }}
      >
        <GoBackButton />
        <div className={styles.aboutText}>
          <h1>About us</h1>
          <p>
            Minim aliquip sint qui laboris quis aliquip pariatur excepteur.
            Eiusmod dolore exercitation incididunt Lorem cupidatat cupidatat.
            Culpa adipisicing nostrud incididunt dolor. Enim in id sunt
            exercitation.
          </p>
        </div>
        <div className={styles.aboutImage}>
          <Image src="/aboutimage.jpg" fill alt={""} />
        </div>

        <div className={styles.aboutValues}>
          <div className={styles.valuesCard}>
            <div>
              <svg viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g>
                  <path
                    d="M9 11.4999L11 13.4999L15.5 8.99987M20 11.9999C20 16.9083 14.646 20.4783 12.698 21.6147C12.4766 21.7439 12.3659 21.8085 12.2097 21.842C12.0884 21.868 11.9116 21.868 11.7903 21.842C11.6341 21.8085 11.5234 21.7439 11.302 21.6147C9.35396 20.4783 4 16.9083 4 11.9999V7.21747C4 6.41796 4 6.0182 4.13076 5.67457C4.24627 5.37101 4.43398 5.10015 4.67766 4.8854C4.9535 4.64231 5.3278 4.50195 6.0764 4.22122L11.4382 2.21054C11.6461 2.13258 11.75 2.0936 11.857 2.07815C11.9518 2.06444 12.0482 2.06444 12.143 2.07815C12.25 2.0936 12.3539 2.13258 12.5618 2.21054L17.9236 4.22122C18.6722 4.50195 19.0465 4.64231 19.3223 4.8854C19.566 5.10015 19.7537 5.37101 19.8692 5.67457C20 6.0182 20 6.41796 20 7.21747V11.9999Z"
                    stroke="#625d5b"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <p>
              Eiusmod id do incididunt fugiat culpa enim et consequat nulla id
              Lorem. Aliquip culpa elit non et ut occaecat non et reprehenderit.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <div>
              <svg strokeWidth="1" viewBox="0 0 24 24" fill="#6f6a67">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path d="M22,12A10,10,0,1,1,12,2a1,1,0,0,1,0,2,8,8,0,1,0,8,8,1,1,0,0,1,2,0ZM12,9a1,1,0,0,0,0-2,5,5,0,1,0,5,5,1,1,0,0,0-2,0,3,3,0,1,1-3-3Zm-.71,3.71a1,1,0,0,0,1.42,0L16.41,9H19a1,1,0,0,0,.71-.29l2-2A1,1,0,0,0,22,5.84a1,1,0,0,0-.54-.73l-1.7-.86-.86-1.7A1,1,0,0,0,18.16,2a1,1,0,0,0-.87.28l-2,2A1,1,0,0,0,15,5V7.59l-3.71,3.7A1,1,0,0,0,11.29,12.71Z"></path>
                </g>
              </svg>
            </div>
            <p>
              Eiusmod id do incididunt fugiat culpa enim et consequat nulla id
              Lorem. Aliquip culpa elit non et ut occaecat non et reprehenderit.
            </p>
          </div>
          <div className={styles.valuesCard}>
            <div>
              <svg
                fill="#6f6a67"
                height="200px"
                width="200px"
                version="1.1"
                viewBox="0 0 23.382 23.382"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M14.58,15.181c0.438-0.732,1.082-1.107,1.936-1.117c0.854-0.01,1.285-0.445,1.299-1.301 c0.012-0.852,0.383-1.496,1.115-1.932c0.734-0.438,0.893-1.027,0.475-1.773c-0.416-0.744-0.416-1.488,0-2.234 c0.418-0.744,0.26-1.332-0.475-1.77c-0.732-0.439-1.104-1.082-1.115-1.938c-0.014-0.852-0.445-1.287-1.299-1.297 c-0.854-0.012-1.498-0.385-1.936-1.117c-0.438-0.734-1.027-0.893-1.771-0.475c-0.744,0.416-1.49,0.416-2.234,0 C9.83-0.19,9.241-0.032,8.803,0.702C8.366,1.435,7.721,1.808,6.868,1.819c-0.852,0.01-1.285,0.445-1.297,1.297 C5.557,3.972,5.186,4.614,4.454,5.054C3.72,5.492,3.559,6.079,3.979,6.824c0.418,0.746,0.418,1.49,0,2.234 c-0.42,0.746-0.26,1.336,0.475,1.773c0.732,0.436,1.104,1.08,1.117,1.932c0.012,0.855,0.445,1.291,1.297,1.301 c0.854,0.01,1.498,0.385,1.936,1.117c0.438,0.734,1.027,0.893,1.771,0.473c0.744-0.412,1.49-0.412,2.234,0 C13.553,16.073,14.143,15.915,14.58,15.181z M11.694,12.614c-2.582,0-4.674-2.092-4.674-4.674c0-2.58,2.092-4.672,4.674-4.672 c2.58,0,4.672,2.092,4.672,4.672C16.366,10.522,14.274,12.614,11.694,12.614z"></path>{" "}
                    <path d="M6.793,14.749c-0.898,0-1.018-0.418-1.018-0.418l-3.507,6.893l2.812-0.316l1.555,2.34c0,0,3.24-6.76,3.24-6.715 C8.196,16.491,8.864,14.794,6.793,14.749z"></path>{" "}
                    <path d="M17.563,14.601c-2.562,0.268-2.041,0.904-2.627,1.398c-0.674,0.719-1.516,0.578-1.516,0.578l3.955,6.805l0.973-2.52 l2.766,0.361L17.563,14.601z"></path>{" "}
                    <polygon points="12.67,6.909 11.692,4.929 10.713,6.909 8.524,7.229 10.106,8.772 9.733,10.954 11.692,9.925 13.651,10.954 13.278,8.772 14.86,7.229 "></polygon>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                    <g> </g> <g> </g> <g> </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <p>
              Eiusmod id do incididunt fugiat culpa enim et consequat nulla id
              Lorem. Aliquip culpa elit non et ut occaecat non et reprehenderit.
            </p>
          </div>
        </div>
        <div className={styles.insightCards}>
          <LegendText text="Some insights:" />

          {insightList.map((item) => {
            return (
              <InsightCard
                key={`insightCard-${item.id}`}
                header={item.title}
                body={item.body}
              />
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
