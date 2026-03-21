const content = [
  "St. Mary's Multipurpose High School & Junior College, Vashi, an institution established 1986, has been a beacon of quality education and holistic development since its inception. Guided by the inspiring motto \"Lead Us from Darkness to Light\", the institution has been committed to nurturing young minds and shaping a brighter future for its students for nearly four decades. Renowned for its dedicated faculty, supportive environment, and strong community ties, St. Mary's has been one of the most sought-after schools in Navi Mumbai, trusted by students, parents, and educators alike.",
  "Through this journey of academic excellence, we have been witnesses of the evolving demographics of Vashi. Amidst this rapid change we have identified the rising need for diverse streams of education – leading us to embark yet another journey. And hence, St. Mary's CBSE School (proposed CBSE) -  a newly established sister institution committed to shaping confident, curious, and compassionate learners for the future. We keenly look forward to continuing the precious legacy of educational excellence while embracing modern teaching practices designed for the next generation.",
  "Our motto for this new institution is \"Spreading Light\" - reflecting our belief that education illuminates the path of growth and success. At St. Mary's, we guide children towards wisdom, character, and purpose through empowering their young minds with knowledge and by helping them to grow into responsible individuals who can think critically, act ethically, and thus be an asset to the society.",
  "With a keen understanding of the needs of today's learners and their families, we provide a nurturing and forward-thinking learning environment that blends strong academic foundations with creativity, critical thinking, and life skills. Our curriculum emphasizes inquiry-based learning, collaboration, and real-world application so that students not only gain knowledge but also learn how to use it meaningfully. At St Mary's, we believe every child is unique and deserves the opportunity to discover their strengths and passions; therefore, through a balanced focus on academics, co-curricular activities, leadership development, and values-based education, we aim to cultivate well-rounded individuals who are prepared to thrive in the opportunities and challenges of a rapidly changing world.",
  "We see education as a partnership between the school and parents. We aim to work together to create a safe, inspiring, and inclusive community where students feel supported, motivated, and empowered to reach their fullest potential.",
  "Thus, by combining tradition, innovation, and a commitment to holistic development, St. Mary's School stands as a place where young minds are guided to spread light—through knowledge, integrity, and lifelong learning.",
];

export default function History() {
  const renderParagraph = (paragraph: string, i: number) => {
    let text = paragraph;
    const boldPhrases = ['Lead Us from Darkness to Light', 'Spreading Light', "St. Mary's CBSE School"];
    
    const parts = [];
    let lastIndex = 0;
    
    boldPhrases.forEach(phrase => {
      const index = text.indexOf(phrase, lastIndex);
      if (index !== -1) {
        parts.push({ text: text.slice(lastIndex, index), bold: false });
        parts.push({ text: phrase, bold: true });
        lastIndex = index + phrase.length;
      }
    });
    
    if (lastIndex < text.length) {
      parts.push({ text: text.slice(lastIndex), bold: false });
    }
    
    if (parts.length === 0) {
      return <p key={i} className="text-gray-800 text-base leading-relaxed" style={{ fontFamily: 'Poppins' }}>{paragraph}</p>;
    }
    
    return (
      <p key={i} className="text-gray-800 text-base leading-relaxed" style={{ fontFamily: 'Poppins' }}>
        {parts.map((part, idx) => 
          part.bold ? <span key={idx} className="font-bold">{part.text}</span> : part.text
        )}
      </p>
    );
  };

  return (
    <div>
      <div className="space-y-4">
        {content.map((paragraph, i) => renderParagraph(paragraph, i))}
      </div>
    </div>
  );
}
