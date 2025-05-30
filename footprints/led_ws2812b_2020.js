module.exports = {
  params: {
    designator: 'LED',
    side: 'F',
    P1: { type: 'net', value: 'VCC' },
    P2: { type: 'net', value: undefined },
    P3: { type: 'net', value: 'GND' },
    P4: { type: 'net', value: undefined },
  },
  body: p => {
    const fp = [];
    const flip = p.side === "B";
if (!flip && p.side !== "F") throw new Error('unsupported side: ' + p.side);

fp.push(`(footprint "LED_WS2812B-2020_PLCC4_2.0x2.0mm"`);
fp.push(p.at);
fp.push(`(layer "${(flip ? "B.Cu" : "F.Cu")}")`);
fp.push(`(property "Reference" "${p.ref}" ${p.ref_hide} (at 0 0 ${p.r}) (layer "${p.side}.SilkS") (effects (font (size 1 1) (thickness 0.15))${ p.side === "B" ? " (justify mirror)" : ""}))`);

fp.push(`(descr "2.0mm x 2.0mm Addressable RGB LED NeoPixel Nano, 12 mA, https://cdn-shop.adafruit.com/product-files/4684/4684_WS2812B-2020_V1.3_EN.pdf")`);
fp.push(`(tags "LED RGB NeoPixel Nano PLCC-4 2020")`);
fp.push(`(attr smd)`);

// Unknown to kicad2ergogen
fp.push(`(embedded_fonts no)`);

// Pads
fp.push(`(pad "1" smd rect (at ${(flip ? 0.915 : -0.915)} -0.55 ${p.r}) (size 0.7 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P1})`);
fp.push(`(pad "2" smd rect (at ${(flip ? 0.915 : -0.915)} 0.55 ${p.r}) (size 0.7 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P2})`);
fp.push(`(pad "3" smd rect (at ${(flip ? -0.915 : 0.915)} 0.55 ${p.r}) (size 0.7 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P3})`);
fp.push(`(pad "4" smd rect (at ${(flip ? -0.915 : 0.915)} -0.55 ${p.r}) (size 0.7 0.7) (layers "${(flip ? "B" : "F")}.Cu" "${(flip ? "B" : "F")}.Mask" "${(flip ? "B" : "F")}.Paste")  ${p.P4})`);

// Drawings on F.CrtYd
fp.push(`(fp_line (start ${(flip ? 1.52 : -1.52)} -1.25) (end ${(flip ? 1.52 : -1.52)} 1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.52 : -1.52)} 1.25) (end ${(flip ? -1.52 : 1.52)} 1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.52 : 1.52)} -1.25) (end ${(flip ? 1.52 : -1.52)} -1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.52 : 1.52)} 1.25) (end ${(flip ? -1.52 : 1.52)} -1.25) (stroke (width 0.05) (type solid)) (layer "${(flip ? "B.CrtYd" : "F.CrtYd")}") )`);

// Drawings on F.Fab
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} -0.45) (end ${(flip ? 1.1 : -1.1)} 1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.1 : -1.1)} 1) (end ${(flip ? -1.1 : 1.1)} 1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? 0.55 : -0.55)} -1) (end ${(flip ? 1.1 : -1.1)} -0.45) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.1 : 1.1)} -1) (end ${(flip ? 0.55 : -0.55)} -1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.1 : 1.1)} -1) (end ${(flip ? -1.1 : 1.1)} 1) (stroke (width 0.1) (type solid)) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_rect (start ${(flip ? 0.5 : -0.5)} -1) (end ${(flip ? 0.05 : -0.05)} -0.45) (stroke (width 0.1) (type solid)) (fill yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_rect (start ${(flip ? 0.5 : -0.5)} 0.4) (end ${(flip ? 0.05 : -0.05)} 1) (stroke (width 0.1) (type solid)) (fill yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") )`);
fp.push(`(fp_text user "\${REFERENCE}" (at 0 0 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 0.5 0.5) (thickness 0.075)) (justify${ flip ? " mirror" : ""})))`);

// Drawings on F.SilkS
fp.push(`(fp_line (start ${(flip ? 1.6 : -1.6)} 1.15) (end ${(flip ? 1.6 : -1.6)} -0.85) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.6 : -1.6)} 1.15) (end ${(flip ? -1.6 : 1.6)} 1.15) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} -1.15) (end ${(flip ? 1.6 : -1.6)} -0.85) (stroke (width 0.12) (type default)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? 1.3 : -1.3)} -1.15) (end ${(flip ? -1.6 : 1.6)} -1.15) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);
fp.push(`(fp_line (start ${(flip ? -1.6 : 1.6)} -1.15) (end ${(flip ? -1.6 : 1.6)} 1.15) (stroke (width 0.12) (type solid)) (layer "${(flip ? "B.SilkS" : "F.SilkS")}") )`);

// 3D Models
fp.push(`(model "\${KICAD9_3DMODEL_DIR}/LED_SMD.3dshapes/LED_WS2812B-2020_PLCC4_2.0x2.0mm.wrl" (offset (xyz 0 0 0)) (scale (xyz 1 1 1)) (rotate (xyz 0 0 0)))`);

// Properties
// fp.push(`(property "Reference" "REF**" (at 0 -2 ${(p.r + 0) % 360}) (layer "${(flip ? "B.SilkS" : "F.SilkS")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Value" "LED_WS2812B-2020_PLCC4_2.0x2.0mm" (at 0 2.2 ${(p.r + 0) % 360}) (layer "${(flip ? "B.Fab" : "F.Fab")}")  (effects (font (size 1 1) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Datasheet" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);
// fp.push(`(property "Description" "" (at 0 0 ${(p.r + 0) % 360}) (unlocked yes) (layer "${(flip ? "B.Fab" : "F.Fab")}") (hide yes)  (effects (font (size 1.27 1.27) (thickness 0.15)) (justify${ flip ? " mirror" : ""})))`);

    fp.push(')');
    return fp.join('\n');
  }
}

