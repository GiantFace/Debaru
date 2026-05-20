/* global React, ImgPh, Lines, Btn, Pill, Box, Note, Icon, StatusDot, PortalSidebar, PortalTopBar */
// Ticketing: Ticket list (3 UX variations) + Ticket detail + Create ticket.

const TICKETS = [
  ['412', 'SCADA riasztás — 3. cella', 'progress', 'Feldolgozás', 'warn', 'Magas',     'Galvanizáló',     'L. Pál',    '2h',  'Hiba'],
  ['410', 'Hidraulika hiba 2. présnél', 'new',     'Új',           'warn', 'Kritikus',  'Galvanizáló',     '—',         '4h',  'Üzemzavar'],
  ['409', 'PLC újraindulás éjjel',     'new',      'Új',           '',     'Normál',    'Galvanizáló',     'E. Kiss',   '1n',  'Hiba'],
  ['407', 'Karbantartás ütemezés Q2', '',          'Ütemezve',     '',     'Normál',    'Felsővezeték',   'B. Nagy',   'tegnap','Karbantartás'],
  ['406', 'Etele tér — váltó kalib.',  '',         'Ütemezve',     '',     'Magas',     '1-es villamos',  'L. Pál',    '1n',  'Karbantartás'],
  ['405', 'Riport-jogosultság kérése', '',         'Vár ügyfélre', '',     'Alacsony',  'Riport modul',   'E. Kiss',   '3n',  'Támogatás'],
  ['402', 'Felsővez. távmenü javít.',  'new',      'Új',           '',     'Normál',    'MÁV FET HETA',   '—',         '2n',  'Fejlesztés'],
  ['399', 'Új SCADA képernyő igénylés','',         'Vár ügyfélre', '',     'Normál',    'Galvanizáló',    'B. Nagy',   '4n',  'Fejlesztés'],
  ['395', 'Adatgyűjtő export bug',    '',          'Vár ügyfélre', 'warn', 'Magas',     'Pécs EMS',       'L. Pál',    '5n',  'Hiba'],
  ['388', 'Dok kérés: PLC fail-safe',  'done',     'Megoldva',     '',     'Alacsony',  'Galvanizáló',    'E. Kiss',   '1h',  'Dokumentum'],
];

const Avatar = ({ initials, color }) => (
  <div style={{
    width: 22, height: 22, borderRadius: 11,
    background: color || 'var(--ink-trace)',
    color: 'white', fontSize: 10, fontWeight: 700,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
  }}>{initials}</div>
);

// ── TICKET LIST · A · LIST VIEW ─────────────────────────────────────────
const TicketListA = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="munkatárs" active="Munkalista" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Hibajegyek" sub="47 nyitott · 3 SLA risk" right={
        <>
          <Btn size="sm" variant="ghost"><Icon name="filter" size={12}/> Szűrők</Btn>
          <Btn size="sm" variant="primary"><Icon name="plus" size={12} color="white"/> Új jegy</Btn>
        </>
      } />

      {/* filter bar */}
      <div style={{ padding: '10px 24px', borderBottom: '1px solid var(--ink-trace)', display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0, fontSize: 11 }}>
        <Pill variant="solid">Minden (47)</Pill>
        <Pill>Új (8)</Pill>
        <Pill>Feldolgozás (14)</Pill>
        <Pill>Vár ügyfélre (9)</Pill>
        <Pill>Megoldva (4)</Pill>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 14, color: 'var(--ink-soft)' }}>
          <span>Prioritás ▾</span>
          <span>Cég ▾</span>
          <span>Projekt ▾</span>
          <span>Felelős ▾</span>
          <span>Dátum ▾</span>
        </span>
      </div>

      {/* view toggle */}
      <div style={{ padding: '8px 24px', display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0, borderBottom: '1px dashed var(--ink-trace)' }}>
        <span style={{ fontSize: 10, color: 'var(--ink-faint)', marginRight: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Nézet:</span>
        <Btn size="sm" variant="primary"><Icon name="list" size={12} color="white"/> Lista</Btn>
        <Btn size="sm" variant="ghost"><Icon name="kanban" size={12}/> Kanban</Btn>
        <Btn size="sm" variant="ghost"><Icon name="timeline" size={12}/> Idővonal</Btn>
        <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-soft)' }}>10 / 47 jegy</span>
      </div>

      <div className="wf-scroll">
        <table className="wf-table" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: 30 }}/><col style={{ width: 55 }}/><col /><col style={{ width: 110 }}/>
            <col style={{ width: 100 }}/><col style={{ width: 130 }}/><col style={{ width: 100 }}/>
            <col style={{ width: 70 }}/><col style={{ width: 70 }}/>
          </colgroup>
          <thead>
            <tr>
              <th><div style={{ width: 12, height: 12, border: '1.5px solid var(--ink-soft)' }} /></th>
              <th>#</th><th>Cím</th><th>Státusz</th><th>Prio</th>
              <th>Projekt</th><th>Felelős</th><th>SLA</th><th></th>
            </tr>
          </thead>
          <tbody>
            {TICKETS.map(([id, t, tone, sLabel, pVar, pLabel, proj, who, w, type]) => (
              <tr key={id}>
                <td><div style={{ width: 12, height: 12, border: '1.5px solid var(--ink-soft)' }} /></td>
                <td style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', color: 'var(--ink-faint)' }}>#{id}</td>
                <td>
                  <div style={{ fontWeight: 600 }}>{t}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)' }}>{type} · {w}</div>
                </td>
                <td><StatusDot status={tone}/>{sLabel}</td>
                <td><Pill variant={pVar}>{pLabel}</Pill></td>
                <td style={{ color: 'var(--ink-soft)' }}>{proj}</td>
                <td>{who !== '—' ? <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}><Avatar initials={who.split(' ').map(p => p[0]).join('')} />{who}</span> : <span style={{ color: 'var(--ink-faint)' }}>nincs</span>}</td>
                <td style={{ color: pVar === 'warn' ? 'var(--warn)' : 'var(--ink-faint)', fontWeight: pVar === 'warn' ? 700 : 400 }}>{pVar === 'warn' ? '<8h' : '—'}</td>
                <td style={{ color: 'var(--ink-faint)', textAlign: 'right' }}>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// ── TICKET LIST · B · KANBAN VIEW ───────────────────────────────────────
const KanbanCard = ({ id, title, prio, pVar, type, proj, who, sla }) => (
  <Box style={{ padding: 10, marginBottom: 8 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6, fontSize: 10 }}>
      <span style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', color: 'var(--ink-faint)' }}>#{id}</span>
      <Pill variant={pVar}>{prio}</Pill>
    </div>
    <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 6, lineHeight: 1.3 }}>{title}</div>
    <div style={{ fontSize: 10, color: 'var(--ink-soft)', marginBottom: 8 }}>{type} · {proj}</div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 10 }}>
      {who !== '—' ? <Avatar initials={who.split(' ').map(p => p[0]).join('')} /> : <span style={{ width: 22 }} />}
      <span style={{ color: sla ? 'var(--warn)' : 'var(--ink-faint)', fontWeight: sla ? 700 : 400 }}>
        {sla || '—'}
      </span>
    </div>
  </Box>
);

const TicketListB = ({ accent }) => {
  const cols = [
    { label: 'Új',         tone: 'new',      tickets: TICKETS.filter(t => t[2] === 'new') },
    { label: 'Feldolgozás', tone: 'progress', tickets: TICKETS.filter(t => t[2] === 'progress') },
    { label: 'Vár ügyfélre',tone: '',         tickets: TICKETS.filter(t => t[3] === 'Vár ügyfélre') },
    { label: 'Ütemezve',    tone: '',         tickets: TICKETS.filter(t => t[3] === 'Ütemezve') },
    { label: 'Megoldva',    tone: 'done',     tickets: TICKETS.filter(t => t[2] === 'done') },
  ];

  return (
    <div className="wf-page" style={{ flexDirection: 'row' }}>
      <PortalSidebar role="munkatárs" active="Munkalista" accent={accent} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PortalTopBar title="Hibajegyek · Kanban" sub="Húzd a kártyát másik státuszba" right={
          <>
            <Btn size="sm" variant="ghost"><Icon name="filter" size={12}/> Szűrők</Btn>
            <Btn size="sm" variant="primary"><Icon name="plus" size={12} color="white"/> Új jegy</Btn>
          </>
        } />
        <div style={{ padding: '8px 24px', display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0, borderBottom: '1px dashed var(--ink-trace)' }}>
          <span style={{ fontSize: 10, color: 'var(--ink-faint)', marginRight: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Nézet:</span>
          <Btn size="sm" variant="ghost"><Icon name="list" size={12}/> Lista</Btn>
          <Btn size="sm" variant="primary"><Icon name="kanban" size={12} color="white"/> Kanban</Btn>
          <Btn size="sm" variant="ghost"><Icon name="timeline" size={12}/> Idővonal</Btn>
          <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-soft)' }}>Csoport: <b>Státusz</b> ▾</span>
        </div>

        <div style={{ flex: 1, padding: 16, overflowX: 'auto', overflowY: 'hidden', background: 'var(--paper-2)' }}>
          <div style={{ display: 'flex', gap: 12, height: '100%', minWidth: 'max-content' }}>
            {cols.map(col => (
              <div key={col.label} style={{ width: 200, flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '8px 6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1.5px solid var(--ink)', marginBottom: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <StatusDot status={col.tone} />
                    <span style={{ fontSize: 12, fontWeight: 700 }}>{col.label}</span>
                  </div>
                  <span style={{ fontSize: 10, color: 'var(--ink-faint)' }}>{col.tickets.length}</span>
                </div>
                <div style={{ overflowY: 'auto', flex: 1, paddingBottom: 30 }}>
                  {col.tickets.map(([id, t, , , pVar, pLabel, proj, who, , type]) => (
                    <KanbanCard key={id} id={id} title={t} prio={pLabel} pVar={pVar} proj={proj} who={who} type={type} sla={pVar === 'warn' ? '<8h' : ''} />
                  ))}
                  <Btn variant="ghost" size="sm" style={{ width: '100%', justifyContent: 'center', borderStyle: 'dashed', color: 'var(--ink-faint)' }}>+ Új</Btn>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ── TICKET LIST · C · TIMELINE VIEW ─────────────────────────────────────
const TicketListC = ({ accent }) => {
  const grouped = {
    'Ma · május 19.': [TICKETS[0], TICKETS[1]],
    'Tegnap · május 18.': [TICKETS[2], TICKETS[3]],
    'Múlt hét': [TICKETS[4], TICKETS[5], TICKETS[6]],
    'Régebbi': [TICKETS[7], TICKETS[8], TICKETS[9]],
  };

  return (
    <div className="wf-page" style={{ flexDirection: 'row' }}>
      <PortalSidebar role="munkatárs" active="Munkalista" accent={accent} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <PortalTopBar title="Hibajegyek · Idővonal" sub="Eseményalapú nézet · legutóbbi tevékenység szerint" />
        <div style={{ padding: '8px 24px', display: 'flex', gap: 4, alignItems: 'center', flexShrink: 0, borderBottom: '1px dashed var(--ink-trace)' }}>
          <span style={{ fontSize: 10, color: 'var(--ink-faint)', marginRight: 8, textTransform: 'uppercase', letterSpacing: 1 }}>Nézet:</span>
          <Btn size="sm" variant="ghost"><Icon name="list" size={12}/> Lista</Btn>
          <Btn size="sm" variant="ghost"><Icon name="kanban" size={12}/> Kanban</Btn>
          <Btn size="sm" variant="primary"><Icon name="timeline" size={12} color="white"/> Idővonal</Btn>
        </div>

        <div className="wf-scroll" style={{ padding: '20px 0' }}>
          {Object.entries(grouped).map(([day, tickets]) => (
            <div key={day} style={{ marginBottom: 28 }}>
              <div style={{ padding: '6px 24px', fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
                {day}
              </div>
              <div style={{ position: 'relative', paddingLeft: 60 }}>
                <div style={{ position: 'absolute', left: 30, top: 0, bottom: 0, width: 1.5, borderLeft: '1.5px dashed var(--ink-trace)' }} />
                {tickets.map(([id, t, tone, sLabel, pVar, pLabel, proj, who, when, type], i) => (
                  <div key={id} style={{ position: 'relative', marginBottom: 12, marginRight: 24 }}>
                    <div style={{
                      position: 'absolute', left: -36, top: 14,
                      width: 14, height: 14, borderRadius: 7,
                      border: '1.5px solid var(--ink)',
                      background: tone === 'new' ? (accent || 'var(--accent)') : tone === 'progress' ? 'var(--warn)' : tone === 'done' ? 'var(--ok)' : 'var(--paper)',
                    }} />
                    <Box style={{ padding: 12, display: 'flex', gap: 14, alignItems: 'center' }}>
                      <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 18, color: 'var(--ink-faint)', minWidth: 40 }}>#{id}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 600 }}>{t}</div>
                        <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{type} · {proj} · {when}</div>
                      </div>
                      <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <Pill variant={pVar}>{pLabel}</Pill>
                        <Pill>{sLabel}</Pill>
                        {who !== '—' && <Avatar initials={who.split(' ').map(p => p[0]).join('')} />}
                      </div>
                    </Box>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── TICKET DETAIL ────────────────────────────────────────────────────────
const TicketDetail = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="munkatárs" active="Munkalista" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* breadcrumb + actions */}
      <div style={{ padding: '10px 24px', borderBottom: '1px dashed var(--ink-trace)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: 'var(--ink-faint)', flexShrink: 0 }}>
        <span>Hibajegyek › Galvanizáló ›</span>
        <span style={{ color: 'var(--ink)' }}>#412</span>
        <span style={{ marginLeft: 'auto', display: 'flex', gap: 6 }}>
          <Btn size="sm" variant="ghost">← Előző</Btn>
          <Btn size="sm" variant="ghost">Következő →</Btn>
        </span>
      </div>

      <div className="wf-scroll" style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 0 }}>
        {/* main */}
        <div style={{ padding: 24, borderRight: '1px solid var(--ink-trace)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <span className="wf-label">#412</span>
            <Pill variant="warn">Magas</Pill>
            <Pill><StatusDot status="progress" />Feldolgozás</Pill>
            <Pill>Hiba</Pill>
          </div>
          <div className="wf-h1" style={{ marginBottom: 4 }}>SCADA riasztás — 3. cella ismétlődő trip</div>
          <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 18 }}>
            Bejelentő: <b>Anna Kovács</b> · Galvanizáló Kft. · 2 órája · projekt: <b>Galvanizáló üzem automatizálás</b>
          </div>

          {/* description box */}
          <Box style={{ padding: 16, marginBottom: 20 }}>
            <div className="wf-label" style={{ marginBottom: 8 }}>Leírás</div>
            <div style={{ fontSize: 13, marginBottom: 10 }}>
              Reggel 06:14-kor a 3. cella SCADA-ja kritikus riasztást küldött (hőmérséklet túllépés), majd 08:02-kor megismétlődött. A PLC nem indult újra, de a folyamat leállt. Csatolva: riasztásnapló-kivonat és képernyőkép.
            </div>
            <Lines count={2} widths={['mid', 'short']} />
            <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
              <Box className="dashed" style={{ padding: 6, display: 'flex', gap: 4, alignItems: 'center', fontSize: 11 }}>
                <Icon name="paperclip" size={12}/> riasztas_log.csv · 12 KB
              </Box>
              <Box className="dashed" style={{ padding: 6, display: 'flex', gap: 4, alignItems: 'center', fontSize: 11 }}>
                <Icon name="paperclip" size={12}/> scada_screen.png · 248 KB
              </Box>
            </div>
          </Box>

          {/* timeline */}
          <div className="wf-label" style={{ marginBottom: 12 }}>Beszélgetés és előzmények</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* system event */}
            <div style={{ display: 'flex', gap: 10, fontSize: 11, color: 'var(--ink-faint)' }}>
              <Icon name="clock" size={12}/>
              <span><b>Rendszer</b> · 14:02 — státusz: Új → Feldolgozás · felelős: László Pál</span>
            </div>
            {/* customer message */}
            <Box style={{ padding: 14 }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                <Avatar initials="AK"/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>Anna Kovács <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>· Galvanizáló Kft.</span></div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)' }}>2 órája · ügyfél</div>
                </div>
              </div>
              <div style={{ fontSize: 13 }}>Helló! A riasztás újra előjött, mellékelek egy második napló-kivonatot is.</div>
              <Lines count={1} widths={['long']} />
            </Box>
            {/* internal note */}
            <Box style={{ padding: 14, background: '#fff8e1', borderColor: '#d9a14a' }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                <Avatar initials="LP" color="var(--warn)"/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>László Pál <Pill variant="warn" style={{ marginLeft: 4 }}>belső</Pill></div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)' }}>1 órája · Debaru — csak belsőleg látható</div>
                </div>
              </div>
              <div style={{ fontSize: 13 }}>Valószínűleg a kalibrációs eltérés, nem maga a szenzor. Nézzétek meg a tegnapi karbantartási jegyzőkönyvet a #398-ban.</div>
            </Box>
            {/* staff reply to customer */}
            <Box style={{ padding: 14 }}>
              <div style={{ display: 'flex', gap: 10, marginBottom: 6 }}>
                <Avatar initials="LP" color={accent || 'var(--accent)'}/>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 700 }}>László Pál <span style={{ fontWeight: 400, color: 'var(--ink-faint)' }}>· Debaru mérnök</span></div>
                  <div style={{ fontSize: 10, color: 'var(--ink-faint)' }}>45 perce</div>
                </div>
              </div>
              <div style={{ fontSize: 13 }}>Köszönjük a kiegészítést. Ma délután kiszállunk a helyszínre, valószínűleg kalibrációs eltérés. Tudná megerősíteni, hogy 14:00 után rendelkezésre áll-e a 3. cella?</div>
            </Box>
          </div>

          {/* reply box */}
          <Box style={{ padding: 14, marginTop: 18 }}>
            <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
              <Btn size="sm" variant="primary">Válasz ügyfélnek</Btn>
              <Btn size="sm" variant="ghost">Belső megjegyzés</Btn>
              <span style={{ marginLeft: 'auto', display: 'flex', gap: 6, color: 'var(--ink-faint)' }}>
                <Icon name="paperclip" size={14}/>
                <Icon name="upload" size={14}/>
              </span>
            </div>
            <div className="wf-input" style={{ height: 80, color: 'var(--ink-faint)' }}>Válasz írása...</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
              <span style={{ fontSize: 11, color: 'var(--ink-faint)' }}>Az ügyfél e-mail értesítést kap a válaszról.</span>
              <Btn variant="primary" size="sm">Küldés →</Btn>
            </div>
          </Box>
        </div>

        {/* meta sidebar */}
        <div style={{ padding: 20, background: 'var(--paper-2)' }}>
          <div className="wf-label" style={{ marginBottom: 10 }}>Tulajdonságok</div>
          {[
            ['Státusz', <Pill key="s"><StatusDot status="progress"/>Feldolgozás</Pill>],
            ['Prioritás', <Pill key="p" variant="warn">Magas</Pill>],
            ['Típus', 'Hiba'],
            ['Felelős', <span key="r" style={{ display: 'flex', gap: 6, alignItems: 'center' }}><Avatar initials="LP" />László Pál</span>],
            ['Bejelentő', 'Anna Kovács'],
            ['Cég', 'Galvanizáló Kft.'],
            ['Projekt', 'Galvanizáló — automatizálás'],
            ['Rendszer', 'PLC #3 / SCADA cella 3'],
            ['Létrehozva', '14:02 · ma'],
            ['SLA határidő', <span key="sl" style={{ color: 'var(--warn)', fontWeight: 700 }}>22:00 (8h)</span>],
          ].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
              <span style={{ color: 'var(--ink-soft)' }}>{k}</span>
              <span style={{ textAlign: 'right' }}>{v}</span>
            </div>
          ))}

          <div className="wf-label" style={{ marginTop: 18, marginBottom: 10 }}>Műveletek</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <Btn size="sm" variant="primary" style={{ justifyContent: 'flex-start' }}><Icon name="check" size={12} color="white"/> Megoldottnak jelöl</Btn>
            <Btn size="sm" variant="ghost" style={{ justifyContent: 'flex-start' }}><Icon name="clock" size={12}/> Ütemezés</Btn>
            <Btn size="sm" variant="ghost" style={{ justifyContent: 'flex-start' }}><Icon name="user" size={12}/> Átadás</Btn>
            <Btn size="sm" variant="ghost" style={{ justifyContent: 'flex-start' }}><Icon name="flag" size={12}/> Eszkalálás</Btn>
          </div>

          <div className="wf-label" style={{ marginTop: 18, marginBottom: 10 }}>Kapcsolódó</div>
          <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>
            <div style={{ padding: '4px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>#398 · karbantartás</span><Pill variant="ok">megoldva</Pill>
            </div>
            <div style={{ padding: '4px 0', display: 'flex', justifyContent: 'space-between' }}>
              <span>#356 · kalibráció</span><Pill variant="ok">megoldva</Pill>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── NEW TICKET ──────────────────────────────────────────────────────────
const TicketCreate = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="ügyfél" active="Új hibajegy" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Új hibajegy" sub="Mérnöki csapatunk értesítést kap a beküldéskor." />
      <div className="wf-scroll" style={{ padding: 24 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
          <Box style={{ padding: 22 }}>
            <div className="wf-field" style={{ marginBottom: 14 }}>
              <label>Hibajegy címe *</label>
              <div className="wf-input">Rövid, beszédes cím — pl. „SCADA riasztás 3. cella"</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div className="wf-field">
                <label>Projekt / rendszer *</label>
                <div className="wf-input" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Galvanizáló üzem automatizálás</span><span>▾</span>
                </div>
              </div>
              <div className="wf-field">
                <label>Bejelentés típusa *</label>
                <div className="wf-input" style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--ink-faint)' }}>Válasszon...</span><span>▾</span>
                </div>
                <div className="wf-tag-row" style={{ marginTop: 6 }}>
                  {['Hiba', 'Üzemzavar', 'Karbantartás', 'Fejlesztés', 'Támogatás', 'Dokumentum'].map(t => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 14 }}>
              <div className="wf-field">
                <label>Prioritás *</label>
                <div style={{ display: 'flex', gap: 4 }}>
                  <Btn size="sm" variant="ghost" style={{ flex: 1 }}>Alacsony</Btn>
                  <Btn size="sm" variant="primary" style={{ flex: 1 }}>Normál</Btn>
                  <Btn size="sm" variant="ghost" style={{ flex: 1 }}>Magas</Btn>
                  <Btn size="sm" variant="ghost" style={{ flex: 1, borderColor: 'var(--warn)', color: 'var(--warn)' }}>Kritikus</Btn>
                </div>
              </div>
              <div className="wf-field">
                <label>Hiba jelentkezésének időpontja</label>
                <div className="wf-input">2026-05-19 06:14</div>
              </div>
            </div>

            <div className="wf-field" style={{ marginBottom: 14 }}>
              <label>Érintett berendezés / komponens</label>
              <div className="wf-input">PLC #3 · SCADA 3. cella</div>
            </div>

            <div className="wf-field" style={{ marginBottom: 14 }}>
              <label>Részletes leírás *</label>
              <div className="wf-input" style={{ height: 120, color: 'var(--ink-faint)' }}>
                Mit tapasztal? Mikor történt? Milyen hibakód jelent meg?
              </div>
            </div>

            <div className="wf-field" style={{ marginBottom: 14 }}>
              <label>Csatolmányok</label>
              <Box className="dashed" style={{ padding: 24, textAlign: 'center', color: 'var(--ink-faint)' }}>
                <Icon name="upload" size={20} color="var(--ink-faint)"/>
                <div style={{ marginTop: 6, fontSize: 12 }}>Húzza ide a fájlokat vagy <span style={{ color: 'var(--ink)', textDecoration: 'underline' }}>tallózzon</span></div>
                <div style={{ fontSize: 10, marginTop: 4 }}>képek, PDF, naplófájlok, képernyőképek — max 50 MB / fájl</div>
              </Box>
              <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                <Box className="dashed" style={{ padding: 6, fontSize: 10 }}>📎 scada_screen.png · 248 KB ×</Box>
                <Box className="dashed" style={{ padding: 6, fontSize: 10 }}>📎 riasztas_log.csv · 12 KB ×</Box>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, paddingTop: 16, borderTop: '1px dashed var(--ink-trace)' }}>
              <Btn variant="ghost" size="sm">Piszkozat mentése</Btn>
              <div style={{ display: 'flex', gap: 8 }}>
                <Btn variant="ghost">Mégse</Btn>
                <Btn variant="primary">Hibajegy beküldése →</Btn>
              </div>
            </div>
          </Box>

          {/* right sidebar — help */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 8 }}>Kontextus</div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginBottom: 8 }}>Bejelentő</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <Avatar initials="AK"/>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Anna Kovács</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>Galvanizáló Kft.</div>
                </div>
              </div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>Várható válaszidő: <b style={{ color: 'var(--ink)' }}>8 óra</b> (Normál prioritás · SLA)</div>
            </Box>

            <Note width={260} rotate={-1.5}>
              💡 Minél részletesebb a leírás (hibakód, képernyőkép, időpont), annál gyorsabban tudunk reagálni.
            </Note>

            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 8 }}>Hasonló múltbeli jegyek</div>
              {[
                ['#356', 'Kalibráció 3. cella', 'megoldva'],
                ['#398', 'Karbantartási jegyzőkönyv', 'megoldva'],
              ].map(([id, t, s]) => (
                <div key={id} style={{ padding: '6px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{id} · {t}</span>
                  <Pill variant="ok">{s}</Pill>
                </div>
              ))}
            </Box>
          </div>
        </div>
      </div>
    </div>
  </div>
);

window.TicketListA = TicketListA;
window.TicketListB = TicketListB;
window.TicketListC = TicketListC;
window.TicketDetail = TicketDetail;
window.TicketCreate = TicketCreate;
