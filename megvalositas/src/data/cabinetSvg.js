// A 404-es oldal animált elosztószekrény-SVG-je (a designból, változatlanul).
// dangerouslySetInnerHTML-lel injektáljuk; az animációkat a notfound.css osztályai hajtják.
export const CABINET_SVG = `
<svg viewBox="0 0 380 512" role="img" aria-label="Élethű villamos kiselosztó szekrény kioldott 404-es kismegszakítóval">
  <defs>
    <linearGradient id="g-enc" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6f4f0"/><stop offset="1" stop-color="#e4e0d8"/></linearGradient>
    <linearGradient id="g-plate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#edeae4"/><stop offset="1" stop-color="#ddd9d0"/></linearGradient>
    <linearGradient id="g-mcb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#e9e5dd"/></linearGradient>
    <linearGradient id="g-rail" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#dcd8cf"/><stop offset=".5" stop-color="#c6c0b4"/><stop offset="1" stop-color="#d4cfc5"/></linearGradient>
    <linearGradient id="g-duct" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e7e3db"/><stop offset="1" stop-color="#d6d1c7"/></linearGradient>
    <radialGradient id="g-glass" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#f0ede7"/></radialGradient>
  </defs>

  <rect x="16" y="12" width="348" height="488" rx="18" fill="url(#g-enc)" stroke="#cbc5ba" stroke-width="2"/>
  <rect x="22" y="18" width="336" height="476" rx="14" fill="none" stroke="#ffffff" stroke-opacity=".7"/>
  <rect x="14" y="70" width="8" height="26" rx="3" fill="#c3bdb2" stroke="#b0a99d"/>
  <rect x="14" y="416" width="8" height="26" rx="3" fill="#c3bdb2" stroke="#b0a99d"/>
  <rect x="34" y="28" width="214" height="26" rx="5" fill="#ffffff" stroke="#d7d2c7"/>
  <text class="nameplate" x="46" y="45" font-size="12.5" letter-spacing="1.5">DEBARU · FŐELOSZTÓ</text>
  <circle cx="330" cy="41" r="11" fill="#d5d0c6" stroke="#b7b0a4" stroke-width="2"/><rect x="325" y="40" width="10" height="2.4" rx="1" fill="#8f8a7e"/>
  <text class="tiny" x="300" y="45" font-size="9" text-anchor="end">IP54</text>

  <rect x="34" y="64" width="312" height="418" rx="8" fill="url(#g-plate)" stroke="#cbc6bb"/>
  <g stroke="#c9c3b7" stroke-width="2">
    <line x1="300" y1="452" x2="332" y2="452"/><line x1="300" y1="458" x2="332" y2="458"/><line x1="300" y1="464" x2="332" y2="464"/><line x1="300" y1="470" x2="332" y2="470"/>
  </g>

  <path class="busbar" d="M60 88 H300"/>
  <rect x="50" y="98" width="266" height="12" rx="2" fill="url(#g-rail)" stroke="#b4aea2"/>
  <line x1="50" y1="101" x2="316" y2="101" stroke="#efece5" stroke-width="1"/><line x1="50" y1="107" x2="316" y2="107" stroke="#aca596" stroke-width="1"/>

  <g transform="translate(58,110)">
    <rect x="0" y="0" width="44" height="70" rx="4" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="6" y="10" width="32" height="7" rx="1.5" fill="#e4e0d6"/><text class="tiny" x="22" y="16" font-size="6.5" text-anchor="middle">63A</text>
    <rect x="7" y="24" width="12" height="20" rx="2" fill="#33363d"/><rect x="25" y="24" width="12" height="20" rx="2" fill="#33363d"/>
    <rect class="lever-on" x="8.5" y="26" width="9" height="8" rx="1.5"/><rect class="lever-on" x="26.5" y="26" width="9" height="8" rx="1.5"/>
    <rect x="8" y="20" width="28" height="3" rx="1.5" fill="#4a4d54"/>
    <circle cx="12" cy="62" r="2.6" fill="#b3ada2"/><circle cx="32" cy="62" r="2.6" fill="#b3ada2"/>
  </g>
  <g transform="translate(112,110)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">C16</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-on" x="9.5" y="26" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <g transform="translate(142,110)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">C16</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-on" x="9.5" y="26" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <g transform="translate(172,110)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">B10</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-on" x="9.5" y="26" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <g transform="translate(202,110)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">B10</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-on" x="9.5" y="26" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <circle class="led" cx="250" cy="122" r="5"/><text class="brk-lbl" x="262" y="126" font-size="10">L1</text>
  <circle class="led led-3" cx="250" cy="142" r="5"/><text class="brk-lbl" x="262" y="146" font-size="10">L2</text>
  <circle class="led led-5" cx="250" cy="162" r="5"/><text class="brk-lbl" x="262" y="166" font-size="10">L3</text>

  <rect x="50" y="192" width="280" height="24" rx="3" fill="url(#g-duct)" stroke="#c6c0b5"/>
  <g stroke="#cfc9be" stroke-width="4">
    <line x1="60" y1="196" x2="60" y2="212"/><line x1="74" y1="196" x2="74" y2="212"/><line x1="88" y1="196" x2="88" y2="212"/><line x1="102" y1="196" x2="102" y2="212"/><line x1="116" y1="196" x2="116" y2="212"/><line x1="130" y1="196" x2="130" y2="212"/><line x1="144" y1="196" x2="144" y2="212"/><line x1="158" y1="196" x2="158" y2="212"/><line x1="172" y1="196" x2="172" y2="212"/><line x1="186" y1="196" x2="186" y2="212"/><line x1="200" y1="196" x2="200" y2="212"/><line x1="214" y1="196" x2="214" y2="212"/><line x1="228" y1="196" x2="228" y2="212"/><line x1="242" y1="196" x2="242" y2="212"/><line x1="256" y1="196" x2="256" y2="212"/><line x1="270" y1="196" x2="270" y2="212"/><line x1="284" y1="196" x2="284" y2="212"/><line x1="298" y1="196" x2="298" y2="212"/><line x1="312" y1="196" x2="312" y2="212"/><line x1="320" y1="196" x2="320" y2="212"/>
  </g>

  <g transform="translate(96,272)">
    <circle cx="0" cy="0" r="40" fill="#ffffff" stroke="#c6c0b5" stroke-width="2"/>
    <circle cx="0" cy="0" r="40" fill="url(#g-glass)" opacity=".5"/>
    <path d="M-26 20 A32 32 0 0 1 26 20" fill="none" stroke="#c9c3b7" stroke-width="2"/>
    <path d="M12 26 A32 32 0 0 1 26 20" fill="none" stroke="var(--warn)" stroke-width="3"/>
    <g stroke="#8f897c" stroke-width="1.6">
      <line x1="0" y1="-32" x2="0" y2="-24" transform="rotate(-58)"/><line x1="0" y1="-32" x2="0" y2="-25" transform="rotate(-29)"/><line x1="0" y1="-32" x2="0" y2="-24" transform="rotate(0)"/><line x1="0" y1="-32" x2="0" y2="-25" transform="rotate(29)"/><line x1="0" y1="-32" x2="0" y2="-24" transform="rotate(58)"/>
    </g>
    <text class="tiny" x="0" y="18" font-size="8" text-anchor="middle">A</text>
    <g class="needle"><line x1="0" y1="0" x2="0" y2="-30" stroke="var(--accent-2)" stroke-width="2.6" stroke-linecap="round"/></g>
    <circle cx="0" cy="0" r="4.5" fill="#33363d"/>
    <text class="brk-lbl" x="0" y="54" font-size="9" text-anchor="middle">0,4 kV · 3~</text>
  </g>
  <rect x="168" y="240" width="152" height="66" rx="7" fill="#ffffff" stroke="#c6c0b5" stroke-width="1.5"/>
  <rect x="178" y="250" width="132" height="30" rx="4" fill="#20232a"/>
  <text x="188" y="271" font-size="15" font-weight="700" fill="#5fd39c" letter-spacing="1">230.4 V</text>
  <circle class="led led-2" cx="184" cy="292" r="3.5"/><text class="tiny" x="192" y="295" font-size="7.5">RUN</text>
  <circle class="led-warn" cx="230" cy="292" r="3.5"/><text class="tiny" x="238" y="295" font-size="7.5">ALARM</text>
  <circle class="led-off" cx="286" cy="292" r="3.5"/><text class="tiny" x="294" y="295" font-size="7.5">TRIP</text>

  <path class="busbar-dead" d="M60 324 H300"/>
  <rect x="50" y="334" width="266" height="12" rx="2" fill="url(#g-rail)" stroke="#b4aea2"/>
  <line x1="50" y1="337" x2="316" y2="337" stroke="#efece5" stroke-width="1"/><line x1="50" y1="343" x2="316" y2="343" stroke="#aca596" stroke-width="1"/>
  <g transform="translate(70,346)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">C10</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-off" x="9.5" y="33" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <g class="brk-trip" transform="translate(104,346)">
    <rect x="0" y="0" width="44" height="70" rx="4" fill="url(#g-mcb)" stroke="var(--warn)" stroke-width="2"/>
    <rect x="6" y="10" width="32" height="7" rx="1.5" fill="#f6e6cf"/><text class="tiny" x="22" y="16" font-size="6.5" text-anchor="middle" fill="var(--warn)">C25 · TRIP</text>
    <rect x="15" y="24" width="14" height="24" rx="2" fill="#33363d"/>
    <rect class="lever" x="16.5" y="32" width="11" height="9" rx="1.5" fill="var(--warn)"/>
    <g class="warn-tri" transform="translate(22,58)"><path d="M0 -8 L8 6 L-8 6 Z" fill="none" stroke="var(--warn)" stroke-width="2" stroke-linejoin="round"/><line x1="0" y1="-2" x2="0" y2="2.5" stroke="var(--warn)" stroke-width="2" stroke-linecap="round"/><circle cx="0" cy="4.6" r="1" fill="var(--warn)"/></g>
    <circle class="spark" cx="8" cy="4" r="3.5"/><circle class="spark spark2" cx="38" cy="6" r="3"/><circle class="spark spark3" cx="22" cy="0" r="2.6"/>
  </g>
  <g transform="translate(156,346)">
    <rect x="0" y="0" width="26" height="70" rx="3.5" fill="url(#g-mcb)" stroke="#c6c0b5" stroke-width="1.2"/>
    <rect x="5" y="10" width="16" height="6" rx="1" fill="#e4e0d6"/><text class="tiny" x="13" y="15" font-size="6" text-anchor="middle">C10</text>
    <rect x="8" y="24" width="10" height="18" rx="2" fill="#33363d"/><rect class="lever-off" x="9.5" y="33" width="7" height="7" rx="1.5"/>
    <circle cx="13" cy="8" r="2.4" fill="#b3ada2"/><circle cx="13" cy="62" r="2.4" fill="#b3ada2"/>
  </g>
  <circle class="led-warn" cx="250" cy="360" r="6"/><text class="brk-lbl" x="264" y="364" font-size="10" fill="var(--warn)">FAULT</text>
  <text class="tiny" x="264" y="380" font-size="8">áramkör kioldott</text>

  <rect x="50" y="430" width="220" height="20" rx="3" fill="#eae6de" stroke="#c6c0b5"/>
  <g stroke="#c6c0b5" stroke-width="1"><line x1="66" y1="430" x2="66" y2="450"/><line x1="82" y1="430" x2="82" y2="450"/><line x1="98" y1="430" x2="98" y2="450"/><line x1="114" y1="430" x2="114" y2="450"/><line x1="130" y1="430" x2="130" y2="450"/><line x1="146" y1="430" x2="146" y2="450"/><line x1="162" y1="430" x2="162" y2="450"/><line x1="178" y1="430" x2="178" y2="450"/><line x1="194" y1="430" x2="194" y2="450"/><line x1="210" y1="430" x2="210" y2="450"/><line x1="226" y1="430" x2="226" y2="450"/><line x1="242" y1="430" x2="242" y2="450"/></g>
  <g fill="#b3ada2"><circle cx="58" cy="440" r="2"/><circle cx="74" cy="440" r="2"/><circle cx="90" cy="440" r="2"/><circle cx="106" cy="440" r="2"/><circle cx="122" cy="440" r="2"/><circle cx="138" cy="440" r="2"/><circle cx="154" cy="440" r="2"/><circle cx="170" cy="440" r="2"/><circle cx="186" cy="440" r="2"/><circle cx="202" cy="440" r="2"/><circle cx="218" cy="440" r="2"/><circle cx="234" cy="440" r="2"/></g>
  <path d="M83 416 C83 424 74 424 74 430" fill="none" stroke="var(--accent)" stroke-width="2.2"/>
  <path d="M126 416 C126 426 122 424 122 430" fill="none" stroke="var(--warn)" stroke-width="2.2"/>
  <path d="M169 416 C169 424 154 424 154 430" fill="none" stroke="#9aa0ab" stroke-width="2.2"/>

  <text class="big404" x="300" y="446" font-size="30" text-anchor="middle"><tspan class="flick">4</tspan><tspan>0</tspan><tspan class="flick2">4</tspan></text>
</svg>`
