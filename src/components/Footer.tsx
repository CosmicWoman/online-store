import React from 'react';
import '../style/css/style.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer_style footer_info">
                    <div className="footer_info_logo">
                        <img src="/img/logowhite.png" alt=""/>
                    </div>
                    <div className="footer_info_text">
                        Компания «Султан» — снабжаем розничные магазины товарами
                        "под ключ" в Кокчетаве и Акмолинской области
                    </div>
                    <div className="footer_info_subscription">
                        <div className="subscription_text">Подпишись на скидки и акции</div>
                        <div className="subscription_entry_field">
                            <input type="text" placeholder='Введите ваш E-mail'/>
                            <button>
                                <img src="/img/pointer-arrow.png" alt=""/>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer_style footer_menu">
                    <div className="footer_title footer_menu_title">Меню сайта:</div>
                    <div className="padding footer_menu_company">О компании</div>
                    <div className="padding footer_menu_delivery">Доставка и оплата</div>
                    <div className="padding footer_menu_return">Возврат</div>
                    <div className="padding footer_menu_contacts">Контакты</div>
                </div>
                <div className="footer_style footer_catalog">
                    <div className="footer_title footer_catalog_title">Категории:</div>
                    <div className="padding footer_catalog_1">Бытовая химия</div>
                    <div className="padding footer_catalog_2">Косметика и гигиена</div>
                    <div className="padding footer_catalog_3">Товары для дома</div>
                    <div className="padding footer_catalog_4">Товары для детей и мам</div>
                    <div className="padding footer_catalog_5">Посуда</div>
                </div>
                <div className="footer_style footer_price">
                    <div className="footer_title footer_price_title">Скачать прайс-лист:</div>
                    <button className="footer_price_button">Прайс-лист
                        <img src="/img/download.png" alt=""/>
                    </button>
                    <div className="footer_price_messenger">
                        <div className="messenger_title">Связь в мессенджерах:</div>
                        <div className="messenger_button">
                            <button className="messenger_whatsapp">
                            </button>
                            <button className="messenger_telegram">
                            </button>
                        </div>
                    </div>
                </div>
                <div className="footer_style footer_contact">
                    <div className="footer_title footer_contact_title">
                        Контакты:
                    </div>
                    <div className="footer_contact_block1">
                        <div className='footer_strong_text'>
                            +7 (777) 490-00-91
                        </div>
                        <div className="footer_contact_mode">
                            время работы: 9:00-20:00
                        </div>
                        <div className="footer_contact_call">
                            Заказать звонок
                        </div>
                    </div>
                    <div className="footer_contact_mail">
                        <div className='footer_strong_text'>opt.sultan@mail.ru</div>
                        <div>На связи в любое время</div>
                    </div>
                    <div className="footer_contact_card">
                        <div className="contact_visa">
                            <img src="/img/Card visa.png" alt=""/>
                        </div>
                        <div className="contact_mastercard">
                            <img src="/img/Card master.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;