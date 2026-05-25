# Roasell Kit — Çalışma Kuralları

Bu repo iki kişilik bir kollaborasyondur (`sefaaydiin` ve `mcylldz`). Hem insan katkıcılar hem Claude oturumları bu kurallara uyar.

## Stack & Komutlar
- Vite + React + TypeScript, Tailwind, Netlify deploy.
- **Paket yöneticisi: Yarn 4 (corepack).** `npm` veya `pnpm` kullanma.
  - Bağımlılık kur: `corepack yarn install`
  - Dev sunucu: `corepack yarn dev`
  - Yeni paket: `corepack yarn add <paket>`
- `yarn.lock` commit edilir, silinmez — ikinizin de aynı paket sürümlerini almasını sağlar.

## Git Workflow — Main'e Doğrudan Push Yok
Tüm anlamlı değişiklikler branch + Pull Request üzerinden geçer. Adımlar:

```bash
git checkout main && git pull            # işe başlarken her zaman
git checkout -b feature/<kisa-ad>        # yeni iş için branch
# ...değişiklikler...
git add -p && git commit -m "..."
git push -u origin feature/<kisa-ad>
```

Sonra GitHub'da Pull Request aç — diğer kollaboratör review edip merge etsin. PR açıldığında Netlify otomatik bir **Deploy Preview** linki üretir (PR yorumlarında görünür); merge'lemeden önce canlı gibi test et.

**Tek istisna:** kesinlikle geri alınması kolay, prod-bozma riski sıfır olan minik düzeltmeler (örn. tek satır kopya değişikliği) doğrudan main'e push edilebilir. Şüphe varsa: PR.

## Production'ı Bozma Riski Olan Değişiklikler — Şart PR
Aşağıdaki konulara dokunan hiçbir değişiklik doğrudan main'e push edilmez:
- Stripe entegrasyonu, webhook URL'leri, ödeme/checkout akışı
- Meta Pixel / analytics ID'leri
- Env şeması (yeni env var, var olanı yeniden adlandırma)
- Oturum/şifre yönetimi, auth akışı
- Netlify config (`netlify.toml`), Functions
- Build/deploy pipeline'ı

## Dosya & Sır Kuralları
- `.env.local` **asla** commit edilmez (zaten `*.local` `.gitignore`'da).
- Production env'leri **Netlify Dashboard → Site settings → Environment variables** üzerinde tutulur, repo'ya değil.
- `STRIPE_SECRET_KEY` gibi `sk_live_*` anahtarlar **yalnızca** Netlify Functions / dashboard ortamında bulunur — hiçbir koşulda `VITE_` prefix ile frontend bundle'ına sızmamalı (Vite sadece `VITE_*` envleri client'a gömer).
- Commit edilmez: `node_modules/`, `dist/`, `.netlify/`, `.yarn/install-state.gz`, herhangi bir `*.local` dosyası.

## Çakışma Önleme
- Aynı dosya üzerinde aynı anda çalışmayın. Kim hangi alanı yapıyor önceden netleştirin (örn. biri `components/Sections/Hero.tsx`, diğeri `components/Sections/Offer.tsx`).
- Her gün işe başlamadan `git checkout main && git pull` yap. Aksi halde çakışma birikir.

## Claude Code İçin Ek Notlar
- Her komutta `corepack yarn` kullan (npm/pnpm değil).
- Push erişimi SSH üzerinden kuruludur; `git push` credential sormaz.
- Main'e bir şey atmadan önce: değişiklik yukarıdaki "tek istisna" tanımına giriyor mu kontrol et. Girmiyorsa branch aç ve kullanıcıya PR akışını öner.
- Sır (`sk_live_*`, webhook secret vb.) konuşmada görüldüyse kullanıcıyı **rotate etmesi** için uyar.
