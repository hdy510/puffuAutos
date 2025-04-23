import bg from '../../img/section1bg.png';
import styles from "./Section1.module.css";

function Section1() {
  return (
    <div className="section">
      <div className={styles.bg}>
        <img src={bg} alt="section1 주황색 가게 배경 이미지" style={{
          width: '100%',
        }} />
      </div>
      <div>section1</div>
    </div>
  )
}

export default Section1