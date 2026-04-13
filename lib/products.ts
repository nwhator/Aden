import type { Product } from '@/lib/types';

export const products: Product[] = [
  {
    id: 'obsidian-oxford',
    name: 'The Obsidian Oxford',
    subtitle: 'Signature Collection',
    price: '$1,250',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD3zyq_u43U9lcfylJHZyUKI_zOeeJXyHsElCl5HwyOM5G5trZTmup6xCmtBnCadTyZV6MDu-58n2d02NBrXzlZ3tmOwGrnxBKisPiEDHM5lVTVrO138oRcUrKuaxTZbxlCCigqaYetsDSCVU3s1v_xa46jzKcD_5jGddzC6e-nVEGJX2SksLTGOaIgi25zWXF8MguzvOQxodG1aJc8-QC-OMON_wf8WZxI1TUB2vUH3YKgKnr0HBIN8jn3UGmtaq0YdGy3xvULqGo',
  },
  {
    id: 'heritage-loafer',
    name: 'Heritage Loafer',
    subtitle: 'Classic Loafer',
    price: '$840',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAYiT48XCRsHlGHQUcDUGaX8truhLoiTyI1r1gB7oTUGvONZcjvzBoAbQSHYigeFUD2G8XpsDHKAsUFy7Ljby8wzrO1gehSQcSbdTrMrokjaD2rebUfle2PgudPYPQTvmW3qideuE8N_Hu7a7OTTJIEDNPFM3jAXhuiug7K-QgoNgtDll2-G4m2LZb4wiYDh_fEFsNiVSZmYQzh_6fBH60uEb6oDIAS4QdofJqFIIqxPnT3W_QuWC0dAgDKnN4PGYGNTWqyS2O5PWo',
  },
  {
    id: 'midnight-chelsea',
    name: 'The Midnight Chelsea',
    subtitle: 'Black Chelsea',
    price: '$920',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAeOM--jp9Ix0_j0t3Vg3bcs2oC70sQlSLFlzwg09FpDmqLWcGVCnOt1plQwq1TszG3Fs8E4e0nW2Wa4i-YEGo0cFs3h4lG3zRDC9TXMsABlJzNssLgGSXUnoawHRddabhw54uCjUyqpPWfe0pKr-MmHOaHmwG8c4e2ksJw1bahlxgaSN_4GkAzxAnLCqWEFafEDsH8cdZZxX1399ncn_IcXk-c9P2ZLqrOUIpO4wFSbKx0x3JzovGZ-v_3vGkpf1yAZt6RK1_RJwI',
  },
  {
    id: 'cassian-loafer',
    name: 'The Cassian Loafer',
    subtitle: 'Midnight Suede',
    price: '$720',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDs6YO1pbHKL0-scEvCZvDCcgBASP2SAAlIZNHVgEGV5Yqjp2CxGvOD78RO-jlUSx-nGI83chQ3L4vTYdI_WW1s0e-RPbuEoxmRCPYiRYSShmikRPIH8B26PoAYrX7T7em38LreT1SZ9RqJLTwC59E06LRmKFQwu4_b6xmDk3HvKoXC365L9fj4SuQG_pXAUDVy19z74Ta5uthRXpVHNzQs1ouRG2CXO2iVpy_G3ngflyXKVv1J-zue_Yu-XIqjEEgb3B375VUzMkE',
  },
  {
    id: 'hadrian-boot',
    name: 'The Hadrian Boot',
    subtitle: 'Black Chromexcel',
    price: '$1,100',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBN6y3vQfq959xc-OuLwNW7rbnFg6ZkSz3LgMOoGtcrKfC9QYdnJcLkcUJx0HI3-NZceoxT4IFDBoI-9Lt9PtWFRa5Kn3xNZVM0F3cTZ24vqU3RnD4cL67034o70StTu2jOsKcZQt3-IyaQTzgrJHdiFEQExi8x0kBQ8Z9PcU_fXzHCtBBv72TO7WYx-yS6iTdvrsV994oLK2cef-VSYRBlENRF5TFnhSjHucxRUVbr6rMji1KzdPmpdP3oqZQnYZWqOfmJwR4e3eU',
  },
  {
    id: 'valerius-monk',
    name: 'The Valerius Monk',
    subtitle: 'Bordeaux Calf',
    price: '$940',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_Tduqbgkvt7ZTEK5aFpf1xzvH4Vy7U_syzjFyIEKn2vFmsWBHgGJ5PV6-IrOb9pv6kc9GLME3JhFyxvD3iWVJcG9Dfpb97bzyogKvQLxmJlV1PvbbxVnd2qIFaKkU44TXEdL5rLx6-50GRf4ZySNv-z8E-PKZtsSywF0TppcCXooHBmoDUkPUhZVOS2qe7eKTLxhiriB_tb32oTx4BD-ubtm00iOwGpL3lW-WfAfl6hxNzpt1ZJAeyrPRg_nrJByRhs9GBYJ-orU',
  },
];

export const featuredProducts = products.slice(0, 3);
