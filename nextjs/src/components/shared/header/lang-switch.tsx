export default function LangSwitch() {
  return (
    <div className="lang__switch">
      <div className="currect__lang">
        <span>EN</span>
        <i className="ico-arrow"></i>
      </div>
      <div className="lang__list">
        <ul className="">
          <li className="lang__item active">EN</li>
          <li className="lang__item">RU</li>
          <li className="lang__item">KZ</li>
          <li className="lang__item">FR</li>
        </ul>
      </div>
    </div>
  );
}
