// ⚠️ IDEIGLENES, ELŐNÉZETI STOCK FOTÓK — nem a végleges tartalom.
// ---------------------------------------------------------------------------
// A képek a Wikimedia Commons stabil CDN-jéről (upload.wikimedia.org) töltődnek,
// kizárólag a vizuális megjelenés bemutatására. 960 px-es, méretezett változatok
// + lusta betöltés, így a teljesítményt nem terhelik érdemben.
//
// ELTÁVOLÍTÁS (bármelyik elég):
//   1) Állítsd az alábbi kapcsolót false-ra:  STOCK_PHOTOS_ENABLED = false
//   2) VAGY töröld ezt a fájlt + az ImageSlot.jsx import/`preview` sorát.
// Ekkor minden kép-hely visszaáll az eredeti, feliratos helykitöltőre.
// ---------------------------------------------------------------------------

export const STOCK_PHOTOS_ENABLED = true

const B = 'https://upload.wikimedia.org/wikipedia/commons/'

// Vizuális témák → konkrét, releváns Wikimedia-fotók (kézzel kiválasztva).
const P = {
  panel:       B + 'thumb/8/84/EFTA00000450_-_Utility_room_containing_electrical_panels_control_boxes_and_industrial_equipment_mounted_on_a_white_wall.jpg/960px-EFTA00000450_-_Utility_room_containing_electrical_panels_control_boxes_and_industrial_equipment_mounted_on_a_white_wall.jpg',
  controlRoom: B + 'thumb/9/94/EFTA00002725_-_Control_room_with_large_electrical_panels_a_printer_and_office_supplies_featuring_industrial_equipment_and_a_whiteboard.jpg/960px-EFTA00002725_-_Control_room_with_large_electrical_panels_a_printer_and_office_supplies_featuring_industrial_equipment_and_a_whiteboard.jpg',
  transformer: B + 'thumb/c/c4/Muurame_electrical_substation_transformer.jpg/960px-Muurame_electrical_substation_transformer.jpg',
  cabinet:     B + 'thumb/d/d1/M1M3_Cabinet_Delivery_to_CAID_%28rubin-20180518-103645%29.tiff/lossy-page1-960px-M1M3_Cabinet_Delivery_to_CAID_%28rubin-20180518-103645%29.tiff.jpg',
  catenary:    B + 'thumb/a/a3/Catenary_masts_with_very_long_50kV_insulators_of_Sishen-Saldanha_line.jpg/960px-Catenary_masts_with_very_long_50kV_insulators_of_Sishen-Saldanha_line.jpg',
  catenary2:   B + 'thumb/c/cd/Midpoint_anchor_catenary_mast.jpg/960px-Midpoint_anchor_catenary_mast.jpg',
  cleanroom:   B + 'thumb/d/d1/How_ST_designs_and_manufactures_semiconductor_devices_-_screenshot_1.png/960px-How_ST_designs_and_manufactures_semiconductor_devices_-_screenshot_1.png',
  scada:       B + 'thumb/0/09/CERN_control_room_computer_monitors.jpg/960px-CERN_control_room_computer_monitors.jpg',
  scada2:      B + 'thumb/1/12/Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg/960px-Diagnostic_monitors_in_the_control_room_of_Wendelstein_7-X.jpg',
  tram:        B + 'thumb/a/aa/Budapest_Orange_Tram.jpg/960px-Budapest_Orange_Tram.jpg',
  tram2:       B + 'thumb/d/d8/K%C3%A1roly_k%C3%B6r%C3%BAt_17-19%2C_tram_1418%2C_tram_1310%2C_Budapest%2C_Inner_City%2C_Hungary_-_panoramio_%285%29.jpg/960px-K%C3%A1roly_k%C3%B6r%C3%BAt_17-19%2C_tram_1418%2C_tram_1310%2C_Budapest%2C_Inner_City%2C_Hungary_-_panoramio_%285%29.jpg',
  hev:         B + 'thumb/8/83/23.09.13_Csepel_H%C3%89V_953-4_%2B_965-6_%2810100880434%29.jpg/960px-23.09.13_Csepel_H%C3%89V_953-4_%2B_965-6_%2810100880434%29.jpg',
  metro:       B + 'thumb/8/8f/%C3%81rp%C3%A1d_h%C3%ADd_metro_station_6.jpg/960px-%C3%81rp%C3%A1d_h%C3%ADd_metro_station_6.jpg',
  railway:     B + 'thumb/5/57/Railway_Depot%2C_old_train_and_signal%2C_2019_Dunaharaszti.jpg/960px-Railway_Depot%2C_old_train_and_signal%2C_2019_Dunaharaszti.jpg',
  team:        B + 'thumb/2/20/MISAWA%2C_JAPAN-_TIGHT_KNIT_ENGINEERS_MAKE_THE_TEAM_WORK_%288611554%29.jpg/960px-MISAWA%2C_JAPAN-_TIGHT_KNIT_ENGINEERS_MAKE_THE_TEAM_WORK_%288611554%29.jpg',
  office:      B + 'thumb/5/5e/Detail_of_modern_office_building_exterior_LCCN2011634389.tif/lossy-page1-960px-Detail_of_modern_office_building_exterior_LCCN2011634389.tif.jpg',
  factory:     B + 'thumb/6/61/Interior_of_China_Industrial_Museum_in_Shenyang.jpg/960px-Interior_of_China_Industrial_Museum_in_Shenyang.jpg',
  server:      B + 'thumb/5/5d/BalticServers_data_center.jpg/960px-BalticServers_data_center.jpg',
  student:     B + 'thumb/3/3f/Engineering_Fabrication_Laboratory_%28Student_Shop%29_%2811422757426%29.jpg/960px-Engineering_Fabrication_Laboratory_%28Student_Shop%29_%2811422757426%29.jpg',
  power:       B + 'thumb/0/0e/Anchor_pylon_of_high-voltage_overhead_power_line_750_kV.jpg/960px-Anchor_pylon_of_high-voltage_overhead_power_line_750_kV.jpg',
  carFactory:  B + 'thumb/2/29/001_Car_factory_assembly_line_-_Opel_factory_in_Gliwice%2C_Poland.jpg/960px-001_Car_factory_assembly_line_-_Opel_factory_in_Gliwice%2C_Poland.jpg',
  carFactory2: B + 'thumb/5/55/Geely_assembly_line_in_Beilun%2C_Ningbo.JPG/960px-Geely_assembly_line_in_Beilun%2C_Ningbo.JPG',
  cad:         B + 'thumb/a/a2/Seattle_-_University_Bridge_blueprint%2C_1915_%2849781358396%29.jpg/960px-Seattle_-_University_Bridge_blueprint%2C_1915_%2849781358396%29.jpg',
  water:       B + 'thumb/d/d7/Krishnapuram_water_treatment_plant_tank.jpg/960px-Krishnapuram_water_treatment_plant_tank.jpg',
}

// A kulcs PONTOSAN a placeholder-szöveg (így nem kell máshol semmit átírni).
export const stockPhotos = {
  // ── Oldal-fejléc hero-k ───────────────────────────────────────────────────
  'Hero fotó — kapcsolószekrény / üzem / mérnöki munka': P.panel,
  'Fotó — mérnöki csapat / műhely': P.team,
  'Fotó — üzem / technológia': P.factory,
  'Fotó — ipari projekt / helyszín': P.catenary,
  'Karrier — mérnöki csapat / helyszíni munka': P.team,
  'Fotó — iroda / telephely': P.office,
  'Adatkezelési tájékoztató': P.server,
  'Általános Szerződési Feltételek': P.office,
  'Impresszum': P.office,

  // ── Szolgáltatások (8 kártya) ─────────────────────────────────────────────
  'Fotó — BMS / vezérlőterem': P.scada,
  'Fotó — transzformátor / elosztó': P.transformer,
  'Fotó — berendezésgyártó műhely': P.cabinet,
  'Fotó — karbantartás / szerviz': P.controlRoom,
  'Fotó — villamos / felsővezeték': P.catenary2,
  'Fotó — tisztatéri kivitelezés': P.cleanroom,
  'Fotó — SCADA vezérlőpult': P.scada2,
  'Fotó — KNX / épületautomatizálás': P.controlRoom,

  // ── Kiemelt projektek (12) ────────────────────────────────────────────────
  'Etele téri villamos-végállomás': P.tram,
  'MÁV vasúti felsővezeték': P.catenary,
  'BKV M4 metró — távvezérlés': P.metro,
  'ASML — tisztatéri technológia': P.cleanroom,
  'Hungrana — 0,4 kV elosztó': P.panel,
  'Audi gyár — automatizálás': P.carFactory,
  'Villamosvonal — váltóvezérlés': P.tram2,
  'Mercedes-Benz gyár': P.carFactory2,
  'HÉV-vonal áramellátás': P.hev,
  'Volkswagen gyártósor': P.carFactory,
  'Tram-train — Szeged': P.tram2,
  'Regor PLC / SCADA platform': P.scada,

  // ── Főoldali bento kép ────────────────────────────────────────────────────
  'Fotó — saját berendezésgyártó műhely': P.cabinet,

  // ── Karrier – állás-illusztrációk (7) ─────────────────────────────────────
  'Automatizálási mérnök — PLC / SCADA / HMI': P.scada,
  'Szekrényszerelő — műhely / kábelezés': P.cabinet,
  'Projektvezető — helyszíni villamos kivitelezés': P.team,
  'Villanyszerelő — helyszíni kivitelezés': P.controlRoom,
  'Külföldi villamos kivitelezés — helyszíni munka': P.catenary2,
  'Gyakornok — villamosmérnök hallgató': P.student,
  'Tervezőmérnök — EPLAN / villamos tervek': P.cad,

  // ── Rólunk – csapatkép ────────────────────────────────────────────────────
  'Csapatfotó — mérnökök / helyszíni munka': P.team,

  // ── (Jelenleg nem renderelt szekciók – ha visszakerülnek, ezek is működnek) ─
  'Gyártóüzem': P.factory,
  'Energetika': P.power,
  'Városi közlekedés': P.tram,
  'Vasút': P.railway,
  'Vízművek': P.water,
  'Adatközpont': P.server,
  'Projektfotó — Etele téri villamos-végállomás': P.tram,
  'Projektfotó — tisztatéri technológia': P.cleanroom,
}
