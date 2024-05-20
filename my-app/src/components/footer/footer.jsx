import Reac from "react";
import './footer.css'


export default function Footer(){
    return(
        <>
        <div className="footerMain">
            <div className="contackt">
                <button>Top “Manhattan” menu</button>
                <h2>контакты</h2>
            </div>
            <div className="footerWrap"> 
                <div className="footerAdress">
                    <div className="AdressOne">
                        <h2>Адрес</h2>
                        <p>Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)</p>
                        <h2>телефон</h2>
                        <p>+7 (812) 713-1945</p>
                        <h2>режим работы</h2>
                        <p>Ежедневно с 12:00 до 06:00</p>
                    </div>
                    <div className="adessTwo">
                        <h2>директор</h2>
                        <p>Лидия Эмильевна, +7(921) 963-55-50</p>
                        <h2>арт-директор</h2>
                        <p>Илиния Ионашко, +7(981) 989-43-30</p>
                    </div>
                </div>
                <div className="footerMap">
                <iframe className="mapFooter" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1999.4054159137274!2d30.329309799999994!3d59.92541469999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631aa7ab1c033%3A0x86642f7bdaafc344!2z0L3QsNCx0LXRgNC10LbQvdCw0Y8g0YDQtdC60Lgg0KTQvtC90YLQsNC90LrQuCwgOTAsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCDQoNC-0YHRgdC40Y8sIDE5MTAyMw!5e0!3m2!1sru!2skg!4v1716104708245!5m2!1sru!2skg" 
                 loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <div className="footerEnd">
                <p>Copyright © 2022. Все права защищены.</p>
                <p>Разработано d-e-n.ru</p>
            </div>
        </div>
        </>
    )
}