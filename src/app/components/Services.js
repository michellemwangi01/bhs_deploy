import React from "react";
import "../styles/services.css";

const articlesData = [
  {
    curriculum: "CBC TUITION",
    imageUrl: "https://shorturl.at/eopLV",
    description:
      "The Competency-Based Curriculum (CBC) in Kenya follows a 2-6-3-3-3 education cycle, which means learners transition through a total of 17 levels, with each level lasting for one year.",
  },
  {
    curriculum: "IGCSE TUITION",
    imageUrl: "https://shorturl.at/gjsH6",
    description:
      "IGCSE TUITION provides comprehensive tutoring for the International General Certificate of Secondary Education (IGCSE), emphasizing core subjects and exam preparation.",
  },
  {
    curriculum: "IB TUITION",
    imageUrl:
      "https://www.ccsoh.us/cms/lib/OH01913306/Centricity/Domain/3420/ib.750.jpg",
    description:
      "IB TUITION offers specialized coaching for the International Baccalaureate (IB) curriculum, guiding students through its rigorous academic requirements and assessments.",
  },
  {
    curriculum: "A-LEVEL TUITION",
    imageUrl: "https://shorturl.at/zBZ26",
    description:
      "A-LEVEL TUITION supports students studying for Advanced Level (A-Level) qualifications, delivering targeted instruction and exam strategies tailored to the A-Level curriculum.",
  },
];

const Services = () => {
  return (
    <div className="my-20 mb-40">
      <h1 className="h1" style={{ color: "#0b2250", textAlign: "center" }}>
        We Offer
      </h1>
      <section className="flex my-10 mx-20 mt-6 flex-wrap">
        {articlesData.map((article, index) => (
          <article
            key={index}
            className="m-2"
            data-aos={index % 2 === 0 ? "fade-up" : "fade-down"} // Alternate flip animations
          >
            <div className="article-wrapper m-8">
              <figure>
                <img src={article.imageUrl} alt="" />
              </figure>
              <div className="article-body">
                <h2>{article.curriculum}</h2>
                <p className="par">{article.description}</p>
                <a href="/services" className="par">
                  Read more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Services;
