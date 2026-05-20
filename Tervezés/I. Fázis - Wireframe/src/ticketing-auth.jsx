/* global React, ImgPh, Lines, Btn, Pill, Box, Note, Icon, StatusDot, PortalSidebar, PortalTopBar */
// Ticketing: Login + 4 role dashboards (ügyfél, ügyfél admin, munkatárs, Debaru admin).

// ── LOGIN ────────────────────────────────────────────────────────────────
const TicketLogin = ({ accent }) => (
  <div className="wf-page">
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
      {/* left — brand panel */}
      <div style={{
        padding: '50px 60px',
        background: 'var(--paper-2)',
        borderRight: '1.5px solid var(--ink)',
        display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div>
          <div className="brand" style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 30, fontWeight: 700, marginBottom: 50 }}>
            Debaru<span style={{ color: accent || 'var(--accent)' }}>.</span>
          </div>
          <div className="wf-label" style={{ marginBottom: 10 }}>Ügyfélportál</div>
          <div className="wf-display" style={{ fontSize: 44, marginBottom: 14 }}>
            Hibajegyek<br/>egy helyen.
          </div>
          <div style={{ fontSize: 14, color: 'var(--ink-soft)', maxWidth: 340 }}>
            Jelentse be a hibákat, kövesse a megoldás folyamatát, csatoljon dokumentumokat — átlátható, naplózott, többnyelvű felületen.
          </div>
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 11, color: 'var(--ink-soft)' }}>
          <Icon name="lock" size={14} />
          <span>Zárt rendszer — fiókokat csak az adminisztrátor hozhat létre.</span>
        </div>
      </div>

      {/* right — form */}
      <div style={{ padding: '60px 80px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ maxWidth: 380 }}>
          <div className="wf-h1" style={{ marginBottom: 8 }}>Bejelentkezés</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)', marginBottom: 24 }}>
            Üdvözöljük! Jelentkezzen be az ügyfélfiókjával.
          </div>

          <div className="wf-field" style={{ marginBottom: 14 }}>
            <label>E-mail-cím</label>
            <div className="wf-input">anna.kovacs@partner.hu</div>
          </div>
          <div className="wf-field" style={{ marginBottom: 14 }}>
            <label>Jelszó</label>
            <div className="wf-input" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>•••••••••••</span>
              <Icon name="eye" size={14} color="var(--ink-faint)" />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18, fontSize: 11 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ width: 12, height: 12, border: '1.5px solid var(--ink)' }} />
              <span>Emlékezz rám</span>
            </div>
            <span style={{ color: accent || 'var(--accent)', borderBottom: '1px solid currentColor' }}>Elfelejtett jelszó?</span>
          </div>
          <Btn variant="primary" size="lg" style={{ width: '100%', justifyContent: 'center' }}>Belépés →</Btn>

          <div style={{ marginTop: 28, paddingTop: 18, borderTop: '1px dashed var(--ink-trace)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 11, color: 'var(--ink-faint)' }}>
            <span>Új hozzáférésre van szüksége?</span>
            <span>info@debaru.hu</span>
          </div>

          <div style={{ marginTop: 18, display: 'flex', gap: 8, fontSize: 11, color: 'var(--ink-faint)' }}>
            <span style={{ fontWeight: 700, color: 'var(--ink)', borderBottom: '1.5px solid var(--ink)' }}>HU</span>
            <span>EN</span><span>DE</span><span>HR</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── Dashboard helpers ────────────────────────────────────────────────────
const StatCard = ({ label, value, hint, accent, big }) => (
  <Box style={{ padding: 16, flex: 1 }}>
    <div className="wf-label" style={{ marginBottom: 8 }}>{label}</div>
    <div style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: big ? 42 : 34, lineHeight: 1, color: accent ? 'var(--accent)' : 'var(--ink)' }}>{value}</div>
    {hint && <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 6 }}>{hint}</div>}
  </Box>
);

const TicketRow = ({ id, title, status, prio, project, when, who }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '60px 1fr 110px 90px 110px 110px 90px',
    gap: 10, alignItems: 'center',
    padding: '10px 12px',
    borderBottom: '1px dashed var(--ink-trace)',
    fontSize: 12,
  }}>
    <span style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', fontSize: 14, color: 'var(--ink-faint)' }}>#{id}</span>
    <span style={{ fontWeight: 600 }}>{title}</span>
    <span><StatusDot status={status.tone} /> {status.label}</span>
    <Pill variant={prio.variant}>{prio.label}</Pill>
    <span style={{ color: 'var(--ink-soft)' }}>{project}</span>
    <span style={{ color: 'var(--ink-faint)' }}>{when}</span>
    {who && <span style={{ color: 'var(--ink-soft)' }}>{who}</span>}
  </div>
);

// ── ÜGYFÉL DASHBOARD ────────────────────────────────────────────────────
const DashCustomer = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="ügyfél" active="Dashboard" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Üdvözöljük, Anna!" sub="3 nyitott hibajegye van, ebből 1 sürgős." />
      <div className="wf-scroll" style={{ padding: 24 }}>
        {/* stats row */}
        <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
          <StatCard label="Nyitott" value="3" hint="2 új, 1 folyamatban" accent />
          <StatCard label="Sürgős" value="1" hint="kritikus prioritás" />
          <StatCard label="Válaszra vár" value="2" hint="öntől / Debarutól" />
          <StatCard label="Lezárt (30 nap)" value="8" />
        </div>

        {/* recent tickets */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20 }}>
          <Box style={{ padding: 0 }}>
            <div style={{ padding: '12px 16px', borderBottom: '1.5px solid var(--ink)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span className="wf-h3">Saját hibajegyeim</span>
              <Btn variant="primary" size="sm"><Icon name="plus" size={12} color="white" /> Új hibajegy</Btn>
            </div>
            <div>
              <TicketRow id="412" title="SCADA riasztás — 3. cella" status={{tone:'progress',label:'Feldolgozás'}} prio={{variant:'warn',label:'Magas'}} project="Galvanizáló" when="2 órája" />
              <TicketRow id="409" title="PLC újraindulás éjjel" status={{tone:'new',label:'Új'}} prio={{variant:'',label:'Normál'}} project="Galvanizáló" when="tegnap" />
              <TicketRow id="405" title="Hozzáférés kérése a riportokhoz" status={{tone:'',label:'Vár ránk'}} prio={{variant:'',label:'Alacsony'}} project="Riportok" when="3 napja" />
              <TicketRow id="398" title="Vezérlőszekrény ellenőrzés ütemezés" status={{tone:'done',label:'Megoldva'}} prio={{variant:'ok',label:'Normál'}} project="Karbantartás" when="múlt hét" />
            </div>
          </Box>

          {/* side panel — projects + tip */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 8 }}>Projektjeim</div>
              {[
                ['Galvanizáló üzem', '2 nyitott jegy'],
                ['Áramátalakító #4', '0 jegy'],
                ['Felsővezetéki távvezérlő', '1 jegy'],
              ].map(([t, sub]) => (
                <div key={t} style={{ padding: '8px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
                  <div style={{ fontWeight: 600 }}>{t}</div>
                  <div style={{ color: 'var(--ink-soft)', fontSize: 11 }}>{sub}</div>
                </div>
              ))}
            </Box>
            <Note width={220} top={undefined} rotate={2}>
              💡 Tipp: új hibajegyhez csatoljon képernyőképet és hibakódot, gyorsabb a megoldás.
            </Note>
            <Box className="accent" style={{ padding: 16, marginTop: 36 }}>
              <div className="wf-label" style={{ marginBottom: 4 }}>Karbantartás közelben</div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Galvanizáló · 2026. május 22.</div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>tervezett, 08:00–14:00</div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── ÜGYFÉL ADMIN DASHBOARD ──────────────────────────────────────────────
const DashCustomerAdmin = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="ügyfél admin" active="Dashboard" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Galvanizáló Kft." sub="Cégszintű áttekintés · 4 kapcsolattartó · 3 projekt" right={
        <>
          <Pill variant="solid">Cég-admin</Pill>
          <Btn size="sm" variant="primary">Új hibajegy</Btn>
        </>
      } />
      <div className="wf-scroll" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
          <StatCard label="Aktív jegy" value="12" hint="cég összes" accent />
          <StatCard label="Sürgős" value="2" />
          <StatCard label="Lezárt (30 nap)" value="28" />
          <StatCard label="Átlag válaszidő" value="4h" hint="SLA: 8h" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
          <Box style={{ padding: 0 }}>
            <div style={{ padding: '12px 16px', borderBottom: '1.5px solid var(--ink)', display: 'flex', gap: 8, alignItems: 'center' }}>
              <span className="wf-h3" style={{ flex: 1 }}>Cégünk hibajegyei</span>
              <Pill>Minden</Pill>
              <Pill>Sürgős (2)</Pill>
              <Pill>Lezárt</Pill>
            </div>
            {[
              ['412', 'SCADA riasztás — 3. cella', {tone:'progress',label:'Feldolgozás'}, {variant:'warn',label:'Magas'}, 'Galvanizáló', '2 órája', 'A. Kovács'],
              ['410', 'Hidraulika hiba 2. présnél', {tone:'new',label:'Új'}, {variant:'warn',label:'Kritikus'}, 'Galvanizáló', '4 órája', 'P. Nagy'],
              ['407', 'Negyedéves karbantartás ütemezés', {tone:'',label:'Ütemezve'}, {variant:'',label:'Normál'}, 'Felsővezeték', 'tegnap', 'P. Nagy'],
              ['405', 'Riportokhoz hozzáférés', {tone:'',label:'Vár ránk'}, {variant:'',label:'Alacsony'}, 'Riportok', '3 napja', 'A. Kovács'],
            ].map(([id, t, st, pr, p, w, who]) => (
              <TicketRow key={id} id={id} title={t} status={st} prio={pr} project={p} when={w} who={who} />
            ))}
          </Box>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 10 }}>Kapcsolattartók</div>
              {['Anna Kovács · ügyfél admin', 'Péter Nagy · ügyfél', 'Lajos Tóth · ügyfél (csak olvasó)'].map(n => (
                <div key={n} style={{ padding: '8px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12, display: 'flex', justifyContent: 'space-between' }}>
                  <span>{n}</span>
                  <Icon name="cog" size={12} color="var(--ink-faint)" />
                </div>
              ))}
              <Btn variant="ghost" size="sm" style={{ marginTop: 10, width: '100%' }}>+ Új kapcsolattartó kérése</Btn>
            </Box>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 10 }}>Riportok</div>
              <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginBottom: 10 }}>Havi jegyforgalom · prioritás szerinti bontás</div>
              <div style={{ height: 80, display: 'flex', alignItems: 'flex-end', gap: 4 }}>
                {[28,42,38,55,49,62,44].map((h, i) => (
                  <div key={i} style={{ flex: 1, height: h, background: i === 5 ? (accent || 'var(--accent)') : 'var(--ink-trace)' }} />
                ))}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--ink-faint)', marginTop: 4 }}>
                <span>nov</span><span>dec</span><span>jan</span><span>feb</span><span>már</span><span>ápr</span><span>máj</span>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── DEBARU MUNKATÁRS DASHBOARD ──────────────────────────────────────────
const DashStaff = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="munkatárs" active="Munkalista" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Munkalistám" sub="9 hozzád rendelt jegy · 2 SLA-közeli" right={
        <>
          <Pill variant="warn">2 SLA közeli</Pill>
          <Btn size="sm" variant="ghost">Naplók</Btn>
        </>
      } />
      <div className="wf-scroll" style={{ padding: 24 }}>
        <div style={{ display: 'flex', gap: 14, marginBottom: 20 }}>
          <StatCard label="Hozzád rendelt" value="9" accent />
          <StatCard label="Sürgős" value="3" />
          <StatCard label="Ma várt" value="4" hint="határidő ma" />
          <StatCard label="Heti lezárt" value="11" />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 20 }}>
          <Box style={{ padding: 0 }}>
            <div style={{ padding: '10px 16px', borderBottom: '1.5px solid var(--ink)', display: 'flex', gap: 8, fontSize: 11 }}>
              <Pill variant="solid">Minden</Pill>
              <Pill>Új</Pill>
              <Pill>Feldolgozás</Pill>
              <Pill>Vár</Pill>
              <span style={{ marginLeft: 'auto', color: 'var(--ink-soft)' }}>Rendezés: prioritás ▾</span>
            </div>
            {[
              ['412', 'SCADA riasztás — 3. cella', {tone:'progress',label:'Feldolgozás'}, {variant:'warn',label:'Magas'}, 'Galvanizáló · Kft.', '2h', '4h SLA'],
              ['410', 'Hidraulika hiba 2. présnél', {tone:'new',label:'Új'}, {variant:'warn',label:'Kritikus'}, 'Galvanizáló · Kft.', '4h', '1h SLA'],
              ['406', 'Etele tér — váltó kalibrálás', {tone:'',label:'Ütemezve'}, {variant:'',label:'Magas'}, 'BKV · 1-es villamos', '1n', 'holnap'],
              ['402', 'Felsővezetéki távmenü', {tone:'new',label:'Új'}, {variant:'',label:'Normál'}, 'MÁV · FET HETA', '2n', '3n'],
              ['395', 'Adatgyűjtő export bug', {tone:'',label:'Vár ügyfélre'}, {variant:'',label:'Alacsony'}, 'Pécs · EMS', '5n', '—'],
            ].map(([id, t, st, pr, p, w, sla]) => (
              <div key={id} style={{ display: 'grid', gridTemplateColumns: '50px 1fr 120px 90px 1fr 60px 80px', gap: 8, alignItems: 'center', padding: '9px 14px', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
                <span style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', color: 'var(--ink-faint)' }}>#{id}</span>
                <span style={{ fontWeight: 600 }}>{t}</span>
                <span><StatusDot status={st.tone} />{st.label}</span>
                <Pill variant={pr.variant}>{pr.label}</Pill>
                <span style={{ color: 'var(--ink-soft)' }}>{p}</span>
                <span style={{ color: 'var(--ink-faint)' }}>{w}</span>
                <span style={{ color: sla.includes('SLA') || sla === 'holnap' ? 'var(--warn)' : 'var(--ink-faint)', fontWeight: 600 }}>{sla}</span>
              </div>
            ))}
          </Box>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 10 }}>Naptáram</div>
              {[
                ['ma 14:00', 'Helyszíni — Galvanizáló', 'warn'],
                ['holn. 09:00', 'Etele tér — kalibrálás', ''],
                ['pén 13:00', 'Csapatmegbeszélés', ''],
              ].map(([t, d, v]) => (
                <div key={t} style={{ padding: '8px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
                  <div style={{ fontWeight: 600, display: 'flex', justifyContent: 'space-between' }}>
                    <span>{d}</span>
                    {v === 'warn' && <Pill variant="warn">most</Pill>}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{t}</div>
                </div>
              ))}
            </Box>
            <Box style={{ padding: 16 }}>
              <div className="wf-h3" style={{ marginBottom: 8 }}>Gyors műveletek</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <Btn variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}><Icon name="plus" size={12} /> Belső megjegyzés</Btn>
                <Btn variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}><Icon name="check" size={12} /> Jegy lezárása</Btn>
                <Btn variant="ghost" size="sm" style={{ justifyContent: 'flex-start' }}><Icon name="paperclip" size={12} /> Dokumentum csatolás</Btn>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ── DEBARU ADMIN DASHBOARD ──────────────────────────────────────────────
const DashAdmin = ({ accent }) => (
  <div className="wf-page" style={{ flexDirection: 'row' }}>
    <PortalSidebar role="admin" active="Áttekintés" accent={accent} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <PortalTopBar title="Vezetői áttekintés" sub="Élő nézet · 2026. máj. 19. · 14:32" right={
        <>
          <Pill variant="warn">3 SLA risk</Pill>
          <Pill variant="solid">Heti riport</Pill>
          <Btn size="sm" variant="primary">Új cég / felhasználó</Btn>
        </>
      } />
      <div className="wf-scroll" style={{ padding: 24 }}>
        {/* KPI row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 12, marginBottom: 18 }}>
          <StatCard label="Nyitott" value="47" accent big />
          <StatCard label="Új ma" value="6" />
          <StatCard label="Átlag válasz" value="3.2h" />
          <StatCard label="Átlag lezárás" value="2.4n" />
          <StatCard label="SLA risk" value="3" hint="2h alatt" />
          <StatCard label="Lezárt (hét)" value="38" />
        </div>

        {/* charts row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 16, marginBottom: 18 }}>
          <Box style={{ padding: 16 }}>
            <div className="wf-h3" style={{ marginBottom: 6 }}>Jegyforgalom · 14 nap</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 110 }}>
              {[35,42,28,55,49,38,62,44,51,67,58,49,72,53].map((h, i) => (
                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                  <div style={{ height: h * 0.7, background: 'var(--ink)' }} />
                  <div style={{ height: h * 0.3, background: accent || 'var(--accent)' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 8, fontSize: 10 }}>
              <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--ink)', marginRight: 4 }} />nyitott</span>
              <span><span style={{ display: 'inline-block', width: 8, height: 8, background: accent || 'var(--accent)', marginRight: 4 }} />új</span>
            </div>
          </Box>
          <Box style={{ padding: 16 }}>
            <div className="wf-h3" style={{ marginBottom: 10 }}>Prioritás megoszlás</div>
            {[
              ['Kritikus', 3, 'warn'],
              ['Magas', 12, ''],
              ['Normál', 24, ''],
              ['Alacsony', 8, ''],
            ].map(([t, n, v]) => (
              <div key={t} style={{ marginBottom: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, marginBottom: 2 }}>
                  <span>{t}</span><span style={{ fontWeight: 700 }}>{n}</span>
                </div>
                <div style={{ height: 6, background: 'var(--paper-2)', position: 'relative' }}>
                  <div style={{ position: 'absolute', inset: 0, width: `${n * 3}%`, background: v === 'warn' ? '#e63946' : 'var(--ink)' }} />
                </div>
              </div>
            ))}
          </Box>
          <Box style={{ padding: 16 }}>
            <div className="wf-h3" style={{ marginBottom: 10 }}>Munkatársi terhelés</div>
            {[
              ['László P.', 9, true],
              ['Eszter K.', 7, false],
              ['Gábor T.', 5, false],
              ['Béla N.', 11, true],
            ].map(([n, c, hot]) => (
              <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
                <span>{n}</span>
                <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                  {hot && <Pill variant="warn">túl</Pill>}
                  <span style={{ fontWeight: 700 }}>{c}</span>
                </span>
              </div>
            ))}
          </Box>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 16 }}>
          <Box style={{ padding: 0 }}>
            <div style={{ padding: '10px 16px', borderBottom: '1.5px solid var(--ink)', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className="wf-h3" style={{ flex: 1 }}>Beavatkozást igénylő jegyek</span>
              <Pill variant="warn">SLA risk</Pill>
              <Pill>Eszkalált</Pill>
            </div>
            {[
              ['410', 'Hidraulika hiba 2. présnél', {tone:'new',label:'Új'}, {variant:'warn',label:'Kritikus'}, 'Galvanizáló Kft.', '4h', '1h SLA'],
              ['388', 'Adatgyűjtő export bug', {tone:'',label:'Vár ügyfélre'}, {variant:'warn',label:'Magas'}, 'Pécs EMS', '5n', 'eszkalált'],
              ['412', 'SCADA riasztás 3. cella', {tone:'progress',label:'Feldolgozás'}, {variant:'warn',label:'Magas'}, 'Galvanizáló', '2h', '4h'],
            ].map(([id, t, st, pr, p, w, sla]) => (
              <div key={id} style={{ display: 'grid', gridTemplateColumns: '50px 1fr 110px 90px 1fr 60px 80px', gap: 8, alignItems: 'center', padding: '9px 14px', borderBottom: '1px dashed var(--ink-trace)', fontSize: 12 }}>
                <span style={{ fontFamily: 'var(--wf-display-font, Caveat), cursive', color: 'var(--ink-faint)' }}>#{id}</span>
                <span style={{ fontWeight: 600 }}>{t}</span>
                <span><StatusDot status={st.tone} />{st.label}</span>
                <Pill variant={pr.variant}>{pr.label}</Pill>
                <span style={{ color: 'var(--ink-soft)' }}>{p}</span>
                <span style={{ color: 'var(--ink-faint)' }}>{w}</span>
                <span style={{ color: 'var(--warn)', fontWeight: 700 }}>{sla}</span>
              </div>
            ))}
          </Box>
          <Box style={{ padding: 16 }}>
            <div className="wf-h3" style={{ marginBottom: 10 }}>Aktivitási napló</div>
            {[
              ['14:28', 'A. Kovács', 'létrehozta #412'],
              ['14:14', 'L. Pál', 'státusz: #410 → Feldolgozás'],
              ['13:52', 'rendszer', 'SLA figyelmeztetés: #388'],
              ['12:34', 'B. Nagy', 'lezárta #401'],
              ['11:11', 'admin', 'új felhasználó: Tóth Lajos'],
            ].map(([t, who, what]) => (
              <div key={t + who + what} style={{ padding: '7px 0', borderBottom: '1px dashed var(--ink-trace)', fontSize: 11, display: 'flex', gap: 8 }}>
                <span style={{ color: 'var(--ink-faint)', fontVariantNumeric: 'tabular-nums', minWidth: 36 }}>{t}</span>
                <span style={{ fontWeight: 600, minWidth: 70 }}>{who}</span>
                <span style={{ color: 'var(--ink-soft)' }}>{what}</span>
              </div>
            ))}
          </Box>
        </div>
      </div>
    </div>
  </div>
);

window.TicketLogin = TicketLogin;
window.DashCustomer = DashCustomer;
window.DashCustomerAdmin = DashCustomerAdmin;
window.DashStaff = DashStaff;
window.DashAdmin = DashAdmin;
