import React, { Component } from 'react';
import styles from './ListTerms.module.css'


class ListTerms extends Component {
  render() {
    return (
      <div className={styles.Terms}>
        <div class="accordion" id="accordionPanelsStayOpenExample">

              <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">У наших курьеров всегда должна быть сдача!</button>
                </h2>
                <div id="panelsStayOpen-collapseOne" className={`accordion-collapse collapse show ${styles.accordionBody}`} aria-labelledby="panelsStayOpen-headingOne">
                  <div className={`accordion-body  `}>Мы програмисты, мы так видим</div>
                </div>
              </div>

              <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="flush-headingTwo">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">Вам что-то не довезли?</button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Закрой, пока никто не заметил</div>
                </div>
            </div>

            <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="flush-headingTree">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTree" aria-expanded="false" aria-controls="flush-collapseTree">Не понравился продукт?</button>
                </h2>
                <div id="flush-collapseTree" class="accordion-collapse collapse" aria-labelledby="flush-headingTree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Закрой, пока никто не заметил</div>
                </div>
            </div>

            <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="flush-headingFour">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">Если появились замечания</button>
                </h2>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Закрой, пока никто не заметил</div>
                </div>
            </div>


            <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="flush-headingFive">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">Оплата Visa, MasterCard и МИР</button>
                </h2>
                <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Закрой, пока никто не заметил</div>
                </div>
            </div>

            <div class={`accordion-item ${styles.accordionItem}`}>
                <h2 class="accordion-header" id="flush-headingSix">
                  <button className={`accordion-button ${styles.accordionButton}`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">Реквизиты</button>
                </h2>
                <div id="flush-collapseSix" class="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">Закрой, пока никто не заметил</div>
                </div>
            </div>


      </div>
    </div>
    );
  }
}

export default ListTerms;