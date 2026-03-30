"use client";

/* ─────────────────────────────────────────────────────────────
   VenturLab — Design System Wiki
   Ruta: /design-system  (solo uso interno, no aparece en nav)
   ───────────────────────────────────────────────────────────── */

function Token({ name, value, swatch }: { name: string; value: string; swatch?: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: "var(--bg-2)", border: "1px solid var(--border)" }}>
      {swatch && (
        <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: swatch, border: "1px solid rgba(0,0,0,0.08)" }} />
      )}
      <div className="min-w-0">
        <p className="text-xs font-semibold" style={{ color: "var(--text-1)", fontFamily: "var(--font-space-grotesk)" }}>{name}</p>
        <p className="text-xs font-mono truncate" style={{ color: "var(--text-3)" }}>{value}</p>
      </div>
    </div>
  );
}

function ClassBadge({ name }: { name: string }) {
  return (
    <code className="text-xs px-2 py-1 rounded-md" style={{ background: "var(--bg-3)", color: "var(--accent)", fontFamily: "monospace" }}>
      .{name}
    </code>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section className="py-14 px-6" style={{ borderBottom: "1px solid var(--border)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="mb-10">
          <p className="label-tag mb-2">Sistema de diseño</p>
          <h2 className="heading-md" style={{ color: "var(--text-1)" }}>{title}</h2>
          {subtitle && <p className="text-sm mt-2" style={{ color: "var(--text-2)" }}>{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

function ComponentRow({ label, className, children }: { label: string; className?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <div>{children}</div>
      <div className="flex items-center gap-2">
        {className && <ClassBadge name={className} />}
        <span className="text-xs" style={{ color: "var(--text-3)" }}>{label}</span>
      </div>
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <div className="pt-16" style={{ background: "var(--bg)" }}>

      {/* ── Header ── */}
      <div className="py-16 px-6" style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <span className="lab-tag mb-4 inline-flex">Uso interno</span>
          <h1 className="heading-xl mb-4" style={{ color: "var(--text-1)" }}>
            Design System<br /><span className="gradient-text">VenturLab</span>
          </h1>
          <p className="body-lg max-w-xl">
            Referencia completa de tokens, componentes y efectos. Todo lo que está aquí es lo que se usa en el sitio — nada más, nada menos.
          </p>
          <div className="flex gap-3 mt-8 flex-wrap">
            <span className="lab-tag">v1.0</span>
            <span className="lab-tag">globals.css + design-system.css</span>
            <span className="lab-tag">Space Grotesk + Inter</span>
          </div>
        </div>
      </div>

      {/* ── 1. Tokens de color ── */}
      <Section title="Tokens de color" subtitle="Variables CSS disponibles en todo el proyecto vía var(--nombre).">
        <div className="space-y-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Fondos</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="--bg"   value="#FFFFFF"  swatch="#FFFFFF" />
              <Token name="--bg-2" value="#F8F9FE"  swatch="#F8F9FE" />
              <Token name="--bg-3" value="#EFF1FC"  swatch="#EFF1FC" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Acentos</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="--accent"        value="#3D52D5"              swatch="#3D52D5" />
              <Token name="--accent-lt"     value="#6273E8"              swatch="#6273E8" />
              <Token name="--accent-teal"   value="#5EC9A8"              swatch="#5EC9A8" />
              <Token name="--accent-purple" value="#7C6FF5"              swatch="#7C6FF5" />
              <Token name="--accent-dim"    value="rgba(61,82,213,0.06)" swatch="rgba(61,82,213,0.06)" />
              <Token name="--accent-muted"  value="rgba(61,82,213,0.10)" swatch="rgba(61,82,213,0.10)" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Colores de marca (hardcoded)</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="Purple inicio"  value="#6427E3" swatch="#6427E3" />
              <Token name="Magenta fin"    value="#B625EF" swatch="#B625EF" />
              <Token name="Teal base"      value="#1A9E85" swatch="#1A9E85" />
              <Token name="Hero dark"      value="#0D0828" swatch="#0D0828" />
              <Token name="Banner dark"    value="#1E1E2E" swatch="#1E1E2E" />
              <Token name="Footer blue"    value="#2B4EED" swatch="#2B4EED" />
              <Token name="Error red"      value="#DC2626" swatch="#DC2626" />
              <Token name="33D7B6 teal"    value="#33D7B6" swatch="#33D7B6" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Textos</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="--text-1" value="#0A0A0F" swatch="#0A0A0F" />
              <Token name="--text-2" value="#6B6685" swatch="#6B6685" />
              <Token name="--text-3" value="#A09DB8" swatch="#A09DB8" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Bordes y sombras</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="--border"       value="#E8EBF7"  swatch="#E8EBF7" />
              <Token name="--border-soft"  value="#F5F3FB"  swatch="#F5F3FB" />
              <Token name="--shadow-sm"    value="0 1px 4px rgba(0,0,0,0.04)" />
              <Token name="--shadow-md"    value="0 4px 20px rgba(0,0,0,0.06)" />
              <Token name="--shadow-hover" value="0 8px 32px rgba(0,0,0,0.09)" />
              <Token name="--shadow-accent"value="0 4px 24px rgba(61,82,213,0.18)" />
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--text-3)" }}>Radios</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <Token name="--r-sm"   value="8px" />
              <Token name="--r-md"   value="12px" />
              <Token name="--r-lg"   value="16px" />
              <Token name="--r-xl"   value="24px" />
              <Token name="--r-full" value="9999px" />
            </div>
          </div>
        </div>
      </Section>

      {/* ── 2. Tipografía ── */}
      <Section title="Tipografía" subtitle="Escala responsive con clamp(). Fuente: Space Grotesk. Usar siempre las clases, nunca tamaños manuales.">
        <div className="space-y-8">
          {[
            { cls: "heading-xl", label: "Heading XL — 3–6.5rem · weight 700 · ls -0.038em", text: "El laboratorio digital" },
            { cls: "heading-lg", label: "Heading LG — 1.8–3rem · weight 600 · ls -0.028em", text: "Conoce nuestros servicios" },
            { cls: "heading-md", label: "Heading MD — 1.25–1.875rem · weight 600 · ls -0.022em", text: "Branding & ADN de Marca" },
            { cls: "heading-sm", label: "Heading SM — 1–1.25rem · weight 600 · ls -0.018em", text: "Envíanos un mensaje" },
            { cls: "body-lg",    label: "Body LG — 1–1.125rem · lh 1.8 · color text-2", text: "Creamos marcas y experiencias digitales de alto impacto para emprendedores y Pymes." },
          ].map(({ cls, label, text }) => (
            <div key={cls} className="flex flex-col gap-2">
              <p className={cls} style={{ color: "var(--text-1)" }}>{text}</p>
              <div className="flex items-center gap-2">
                <ClassBadge name={cls} />
                <span className="text-xs" style={{ color: "var(--text-3)" }}>{label}</span>
              </div>
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <p className="gradient-text heading-lg">Realidad digital.</p>
            <div className="flex items-center gap-2">
              <ClassBadge name="gradient-text" />
              <span className="text-xs" style={{ color: "var(--text-3)" }}>Texto con gradiente de marca — combinar con heading-*</span>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 3. Botones ── */}
      <Section title="Botones" subtitle="Tres variantes. Usar btn-primary para CTAs principales, btn-outline en fondos claros, btn-outline-invert en fondos oscuros.">
        <div className="flex flex-wrap gap-8 items-start">
          <ComponentRow label="CTA principal — fondo degradado morado" className="btn-primary">
            <a href="#" className="btn-primary">Comenzar proyecto →</a>
          </ComponentRow>
          <ComponentRow label="Secundario sobre fondo claro" className="btn-outline">
            <a href="#" className="btn-outline">Ver servicios</a>
          </ComponentRow>
          <ComponentRow label="Secundario sobre fondo oscuro" className="btn-outline-invert">
            <div className="p-4 rounded-2xl inline-block" style={{ background: "#1E1E2E" }}>
              <a href="#" className="btn-outline-invert">WhatsApp directo</a>
            </div>
          </ComponentRow>
        </div>
      </Section>

      {/* ── 4. Cards ── */}
      <Section title="Cards" subtitle="Sistema de contenedores. card y card-subtle para fondos claros. Glass para fondos de color u oscuros.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <ComponentRow label="Card estándar — blanco, borde, sombra" className="card">
            <div className="card p-6">
              <p className="heading-sm mb-1" style={{ color: "var(--text-1)" }}>Identity Pack</p>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>Kit esencial de marca.</p>
            </div>
          </ComponentRow>
          <ComponentRow label="Card sutil — sobre bg-2" className="card-subtle">
            <div className="card-subtle p-6">
              <p className="heading-sm mb-1" style={{ color: "var(--text-1)" }}>Metodología</p>
              <p className="text-sm" style={{ color: "var(--text-2)" }}>Proceso paso a paso.</p>
            </div>
          </ComponentRow>
          <ComponentRow label="Glass tenue — sobre oscuro" className="glass-light">
            <div className="p-4 rounded-2xl" style={{ background: "#0D0828" }}>
              <div className="glass-light p-6 rounded-2xl">
                <p className="text-sm font-semibold mb-1" style={{ color: "#fff" }}>+120%</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>Tráfico orgánico</p>
              </div>
            </div>
          </ComponentRow>
          <ComponentRow label="Glass opaco — sobre teal" className="glass-heavy">
            <div className="p-4 rounded-2xl" style={{ background: "#1A9E85" }}>
              <div className="glass-heavy p-6 rounded-2xl">
                <p className="heading-sm mb-1" style={{ color: "var(--text-1)" }}>Branding</p>
                <p className="text-sm" style={{ color: "var(--text-2)" }}>Propósito y naming.</p>
              </div>
            </div>
          </ComponentRow>
        </div>
      </Section>

      {/* ── 5. Tags y badges ── */}
      <Section title="Tags y badges" subtitle="Para etiquetar secciones, categorías y estados.">
        <div className="flex flex-wrap gap-8 items-start">
          <ComponentRow label="Label sin fondo — para nombrar secciones" className="label-tag">
            <p className="label-tag">Servicios</p>
          </ComponentRow>
          <ComponentRow label="Lab tag — pill con fondo acento" className="lab-tag">
            <span className="lab-tag">IA integrada</span>
          </ComponentRow>
          <ComponentRow label="Label sobre fondo oscuro" className="label-on-dark">
            <div className="p-3 rounded-xl inline-block" style={{ background: "#0D0828" }}>
              <p className="label-on-dark">Servicios</p>
            </div>
          </ComponentRow>
        </div>
      </Section>

      {/* ── 6. Inputs ── */}
      <Section title="Inputs" subtitle="Para el formulario de contacto. Los estilos inline en ContactForm.tsx replicar estos valores.">
        <div className="max-w-md space-y-4">
          <ComponentRow label="Input estándar" className="input-base">
            <input className="input-base" placeholder="Tu nombre" />
          </ComponentRow>
          <ComponentRow label="Select" className="input-base">
            <select className="input-base" style={{ cursor: "pointer", appearance: "none" }}>
              <option>Selecciona un servicio</option>
              <option>Branding & ADN de Marca</option>
            </select>
          </ComponentRow>
          <ComponentRow label="Textarea" className="input-base">
            <textarea className="input-base" rows={3} placeholder="Cuéntanos sobre tu proyecto..." style={{ resize: "none" }} />
          </ComponentRow>
        </div>
      </Section>

      {/* ── 7. Efectos Glass ── */}
      <Section title="Efectos Glass" subtitle="Frosted glass en 4 niveles de opacidad. Requieren un fondo de color detrás.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { cls: "glass-light",  label: "Tenue — stats del hero",        bg: "#0D0828" },
            { cls: "glass-medium", label: "Medio — sobre colores de marca", bg: "#3D52D5" },
            { cls: "glass-heavy",  label: "Opaco — cards sobre teal",       bg: "#1A9E85" },
            { cls: "glass-nav",    label: "Nav al scroll — sobre blanco",   bg: "#F0F0F0" },
          ].map(({ cls, label, bg }) => (
            <ComponentRow key={cls} label={label} className={cls}>
              <div className="p-3 rounded-2xl" style={{ background: bg }}>
                <div className={`${cls} p-5 rounded-xl`}>
                  <p className="text-sm font-semibold" style={{ color: bg === "#F0F0F0" ? "var(--text-1)" : "#fff" }}>Contenido</p>
                  <p className="text-xs mt-1" style={{ color: bg === "#F0F0F0" ? "var(--text-3)" : "rgba(255,255,255,0.6)" }}>Ejemplo</p>
                </div>
              </div>
            </ComponentRow>
          ))}
        </div>
      </Section>

      {/* ── 8. Blobs ── */}
      <Section title="Blobs decorativos" subtitle="Elementos de color difuminado. Siempre: position absolute, pointer-events-none, dentro de un padre relative overflow-hidden.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { cls: "blob-purple",   label: "Hero principal" },
            { cls: "blob-blue",     label: "Secundario" },
            { cls: "blob-teal",     label: "Acento IA" },
            { cls: "blob-magenta",  label: "Acento marca" },
            { cls: "blob-green-lt", label: "Brillo sobre teal" },
          ].map(({ cls, label }) => (
            <ComponentRow key={cls} label={label} className={cls}>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 100, background: "#0D0828" }}>
                <div className={`${cls} absolute inset-0`} />
              </div>
            </ComponentRow>
          ))}
        </div>
      </Section>

      {/* ── 9. Tramas de fondo ── */}
      <Section title="Tramas de fondo" subtitle="Siempre sobre un fondo de color. Position absolute, inset-0, pointer-events-none.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { cls: "pattern-dots",    label: "Puntos — hero oscuro",    bg: "#0D0828" },
            { cls: "pattern-lines",   label: "Líneas — sección teal",   bg: "#1A9E85" },
            { cls: "pattern-dots-sm", label: "Puntos finos — variante", bg: "#1E1E2E" },
          ].map(({ cls, label, bg }) => (
            <ComponentRow key={cls} label={label} className={cls}>
              <div className="relative rounded-2xl overflow-hidden" style={{ height: 100, background: bg }}>
                <div className={`${cls} absolute inset-0`} />
              </div>
            </ComponentRow>
          ))}
        </div>
      </Section>

      {/* ── 10. Gradientes de marca ── */}
      <Section title="Gradientes de marca" subtitle="Para fondos de sección, cards destacadas y textos de acento.">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            { cls: "gradient-brand",      label: "Gradiente principal",  h: 80 },
            { cls: "gradient-blue",       label: "Gradiente azul",       h: 80 },
            { cls: "gradient-teal",       label: "Gradiente teal",       h: 80 },
          ].map(({ cls, label, h }) => (
            <ComponentRow key={cls} label={label} className={cls}>
              <div className={`${cls} rounded-2xl`} style={{ height: h }} />
            </ComponentRow>
          ))}
          <ComponentRow label="Texto con gradiente" className="gradient-brand-text">
            <p className="gradient-brand-text heading-md">VenturLab</p>
          </ComponentRow>
        </div>
      </Section>

      {/* ── 11. Fondos de sección ── */}
      <Section title="Fondos de sección" subtitle="Aplicar en el elemento <section>. Cada uno tiene su personalidad dentro del sitio.">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { cls: "section-hero",     label: "Hero / portadas oscuras" },
            { cls: "section-dark",     label: "CTAs secundarios" },
            { cls: "section-black",    label: "CTA principal bottom" },
            { cls: "section-teal",     label: "ServicesPreview" },
            { cls: "section-footer",   label: "Footer" },
            { cls: "section-light",    label: "Secciones blancas" },
            { cls: "section-elevated", label: "Secciones bg-2" },
          ].map(({ cls, label }) => (
            <ComponentRow key={cls} label={label} className={cls}>
              <div className={`${cls} rounded-2xl`} style={{ height: 56 }} />
            </ComponentRow>
          ))}
        </div>
      </Section>

      {/* ── 12. Utilidades ── */}
      <Section title="Utilidades" subtitle="Clases de ayuda para elementos recurrentes del sitio.">
        <div className="flex flex-wrap gap-8 items-start">
          <ComponentRow label="Link con subrayado animado al hover" className="animated-underline">
            <a href="#" className="animated-underline text-sm font-medium" style={{ color: "var(--accent)" }}>
              Ver todos los servicios →
            </a>
          </ComponentRow>
          <ComponentRow label="Número de sección mono" className="section-number">
            <p className="section-number">01 / Diseño</p>
          </ComponentRow>
          <ComponentRow label="Divisor en fondo claro" className="divider-light">
            <div className="divider-light w-48" />
          </ComponentRow>
          <ComponentRow label="Divisor en fondo oscuro" className="divider-dark">
            <div className="p-3 rounded-xl" style={{ background: "#1E1E2E" }}>
              <div className="divider-dark w-48" />
            </div>
          </ComponentRow>
          <ComponentRow label="Sombra con acento de marca" className="shadow-brand">
            <div className="shadow-brand p-4 rounded-2xl" style={{ background: "#fff", border: "1px solid var(--border)" }}>
              <p className="text-sm" style={{ color: "var(--text-1)" }}>Card con sombra morada</p>
            </div>
          </ComponentRow>
          <ComponentRow label="Texto sobre fondo oscuro" className="text-on-dark-med">
            <div className="p-3 rounded-xl" style={{ background: "#0D0828" }}>
              <p className="text-on-dark">Alto contraste</p>
              <p className="text-on-dark-high">Alta opacidad</p>
              <p className="text-on-dark-med">Media opacidad</p>
              <p className="text-on-dark-low">Baja opacidad</p>
            </div>
          </ComponentRow>
        </div>
      </Section>

      {/* Footer de la wiki */}
      <div className="py-10 px-6 text-center" style={{ background: "var(--bg-2)", borderTop: "1px solid var(--border)" }}>
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          VenturLab Design System v1.0 · <code style={{ fontFamily: "monospace" }}>globals.css</code> + <code style={{ fontFamily: "monospace" }}>design-system.css</code> · Solo uso interno
        </p>
      </div>

    </div>
  );
}
