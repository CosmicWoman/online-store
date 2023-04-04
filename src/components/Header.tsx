import React from 'react';
import '../style/css/style.css'

//

const Header = () => {
    return (
        <header>
            <div className="header_info">
                <div className="header_info_address">
                    <div className="info_address">
                        <img src="/public/img/pointer.png" alt=""/>
                        <div className="info_address_text">
                            <div className='text_strong'>г. Кокчетав, ул. Ж. Ташенова 129Б</div>
                            <div>(Рынок Восточный)</div>
                        </div>
                    </div>

                    <div className="info_address_email">
                        <img src="/public/img/email.png" alt=""/>
                        <div className="info_address_email_text">
                            <div className='text_strong'>opt.sultan@mail.ru</div>
                            <div>На связи в любое время</div>
                        </div>
                    </div>
                </div>
                <div className="header_link">
                    <div>О компании</div>
                    <div>Доставка и оплата</div>
                    <div>Возврат</div>
                    <div>Контакты</div>
                </div>
            </div>

            <div className="header_menu">
                <div className="header_menu_logo">
                    <img src="/public/img/logoblack.png" alt=""/>
                </div>
                <button className="header_menu_catalog">Каталог
                    <img src="/public/img/catalog.png" alt=""/>
                </button>
                <div className="header_menu_search">
                    <input type="text" placeholder='Поиск...'/>
                    <button>
                        <img src="/public/img/search.png" alt=""/>
                    </button>
                </div>
                <div className="header_menu_contact">
                    <div className="menu_contact">
                        <div className="contact_phone">
                            +7 (777) 490-00-91
                        </div>
                        <div className="contact_mode">
                            время работы: 9:00-20:00
                        </div>
                        <div className="contact_call">
                            Заказать звонок
                        </div>
                    </div>
                    <div className="contact_foto">
                        <img src="/public/img/foto.png" alt=""/>
                    </div>
                </div>

                <div className="header_menu_price">
                    <button>Прайс-лист
                        <img src="/public/img/download.png" alt=""/>
                    </button>
                </div>
                <div className="header_menu_basket">
                    <div className="basket_button">
                        <div className="circle"></div>
                        <button>
                            <img src="/public/img/basket.png" alt=""/>
                        </button>
                    </div>
                    <div className="basket">Корзина</div>
                    <div className="basket_sum"></div>
                </div>
            </div>
        </header>
    );
};

export default Header;