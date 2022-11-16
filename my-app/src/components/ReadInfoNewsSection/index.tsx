import React from "react";
import "./index.scss";
import CardInfoNews from "../CardInfoNews";
function ReadInfoNewsSection() {
  return (
    <section className="read-info-news__section">
      <p>Читайте также</p>
      <div className="block-cards__div_common">
      {[...Array(3)].map((item, index)=>
       <CardInfoNews key={index}
       altDescript={"Фото комнаты"}
       textTitle="Линия Сталина: суровый отдых в усадьбах на сутки"
       textInfo="Чем заняться в выходные? Когда нет безотлагательных домашних дел, а на улице 
       хорошая погода, хочется уехать из города, чтобы сменить обстановку. Например, снять коттедж на сутки для семьи или большой компании друзей. А..."
       textDataCard="14 Января 2008"
       ReadText="Читать"
     />
      )}
      </div>
    </section>
  );
}
export default ReadInfoNewsSection;
