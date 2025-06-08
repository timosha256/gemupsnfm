export const LetsTalk: React.FC = () => {
  return (
    <section id="letsTalk">
      <div className="letsTalk__wrapper container">
        <div className="textData">
          <div className="logo__wrapper">
            <img
              src="@img/logo/logo-spin.svg"
              alt="name"
              className="element spinLogo"
            />
            <img
              src="@img/logo/logo-text.svg"
              alt="name"
              className="logotext"
            />
          </div>
          <div className="text__wrapper">
            <p className="title">
              <span>Обсудим</span> детали?
            </p>
            <p className="sub">
              Вы можете ознакомиться с уже реализованными проектами нашей
              компании. Каждый проект выполнен “под ключ” от стадии
              проектирования до полноценного вводу в эксплуатацию.
            </p>
          </div>
          <div className="contact__area">
            <div className="contanct__items">
              <div className="contact__item">
                <span className="head">Можете написать</span>
                <a href="mailto:info@beldry.by" title="mail">
                  info@beldry.by
                </a>
              </div>
              <div className="contact__item">
                <span className="head">Консультация</span>
                <a href="tel:info@beldry.by" title="mail">
                  +375 (29) 695-695-0
                </a>
              </div>
            </div>
            <div className="messangers">
              <a href="#" title="">
                <img src="@img/icons/telegram.svg" alt="" />
              </a>
              <a href="#" title="">
                <img src="@img/icons/whatsapp.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="form__wrapper">
          <form className="letstalk" action="" method="" id="letstalk">
            <div className="grid-2">
              <input
                className="input__field"
                type="text"
                name="name"
                id="name"
                placeholder="Ваше имя"
                minLength={2}
                autoComplete="on"
                required
              />
              <input
                className="input__field"
                type="tel"
                name="tel"
                id="tel"
                placeholder="Номер телефона"
                minLength={2}
                autoComplete="on"
                required
              />
              <input
                className="input__field"
                type="mail"
                name="mail"
                id="mail"
                placeholder="Электронная почта"
                minLength={2}
                autoComplete="on"
                required
              />
              <select id="service">
                <option data-placeholder="true"></option>
                <option value="value1">Название опции</option>
                <option value="value2">Название опции</option>
                <option value="value3">Название опции</option>
              </select>
            </div>
            <textarea
              name=""
              rows={8}
              id=""
              placeholder="Текст Вашего сообщения"
              minLength={5}
            ></textarea>
            <div className="send__action">
              <div className="check-info">
                <input
                  type="checkbox"
                  className="custom-checkbox"
                  id="check"
                  name="happy"
                  value="yes"
                  checked
                />
                <label htmlFor="check">
                  Отправляя форму с данными Вы даёте согласие на обработку своих
                  персональных данных
                </label>
              </div>
              <button type="submit">Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
