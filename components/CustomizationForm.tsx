'use client';

import { useState } from 'react';

export default function CustomizationForm() {
  const [leatherType, setLeatherType] = useState('French Box Calf');
  const [color, setColor] = useState('Obsidian');
  const [sole, setSole] = useState('Traditional Oak Bark');
  const [stitching, setStitching] = useState('Natural Cream');
  const [notes, setNotes] = useState('');

  return (
    <form className="space-y-8 rounded-sm border border-[#2a2a2a] bg-surfaceContainerLow p-8 shadow-luxe">
      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Leather Type</label>
        <select
          value={leatherType}
          onChange={(event) => setLeatherType(event.target.value)}
          className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none transition focus:border-primary"
        >
          <option>French Box Calf</option>
          <option>Italian Pebbled Calf</option>
          <option>Black Chromexcel</option>
          <option>Velvet Suede</option>
        </select>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Color</label>
        <select
          value={color}
          onChange={(event) => setColor(event.target.value)}
          className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none transition focus:border-primary"
        >
          <option>Obsidian</option>
          <option>Cognac</option>
          <option>Espresso</option>
          <option>Slate</option>
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Sole</label>
          <select
            value={sole}
            onChange={(event) => setSole(event.target.value)}
            className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none transition focus:border-primary"
          >
            <option>Traditional Oak Bark</option>
            <option>City Rubber Lug</option>
            <option>Leather with Mirror Finish</option>
            <option>Storm Welt</option>
          </select>
        </div>
        <div className="space-y-3">
          <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Stitching</label>
          <select
            value={stitching}
            onChange={(event) => setStitching(event.target.value)}
            className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none transition focus:border-primary"
          >
            <option>Natural Cream</option>
            <option>Deep Bronze</option>
            <option>Monochrome Black</option>
            <option>Antique Gold</option>
          </select>
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-[10px] uppercase tracking-[0.3em] text-stone-500">Notes</label>
        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          rows={5}
          placeholder="Enter any special requests or fit notes"
          className="w-full rounded-sm border border-[#3a3a3a] bg-transparent px-4 py-3 text-sm text-onSurface outline-none transition focus:border-primary"
        />
      </div>

      <button
        type="button"
        className="w-full rounded-sm bg-gradient-to-br from-primary to-primaryContainer px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-black transition hover:scale-[1.02]"
      >
        Save Customization
      </button>
    </form>
  );
}
