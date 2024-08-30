import Image from 'next/image';
import myImage from './me.jpg';
import css from './about.module.css'

export default function AboutPage() {
  return (
    <article className={css.root}>
      <Image src={myImage} alt="me image" width={600} loading="eager"/>
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        minus velit, rem nemo non placeat inventore perferendis odio et facilis
        voluptate accusantium vero nulla assumenda laboriosam a iure blanditiis
        eius. Possimus, minima quod harum ex debitis cupiditate minus
        dignissimos! Tempore debitis qui totam nobis nisi molestias consectetur
        est incidunt, officiis, autem quis omnis suscipit et ea? Assumenda magni
        eveniet, doloremque illo reprehenderit quae impedit incidunt? Totam amet
        illum in. Ut perferendis magni asperiores hic quod obcaecati dolorem
        tempore corrupti dicta! Ex ipsa maiores quia non aut quidem maxime
        tempore unde autem vero, officia sint saepe inventore iure odit quas
        odio!
      </div>
    </article>
  );
}
