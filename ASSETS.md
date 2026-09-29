# Temporary asset provenance

No standalone assets or selected reference screenshot were present when work began. These three images were generated using the built-in imagegen tool; no external photography was downloaded. They are illustrative and not actual PRYDE products. The generated PNG originals remain in Codex's generated_images directory. Optimized WebP copies are in this workspace:

- `public/images/hero/editorial-placeholder.webp`
- `public/images/collections/optical-placeholder.webp`
- `public/images/collections/sunglasses-placeholder.webp`

## Final prompts

### Hero
Use case: photorealistic-natural. Asset: temporary editorial hero for an eyewear website, landscape 3:2. Natural-colour high-fashion photograph of a woman wearing black rectangular sunglasses and ivory linen clothing standing against a sunlit warm concrete architectural wall. Subject occupies the right third, head fully in frame, ample dark warm shadowed empty wall across left half for white HTML headline. Refined editorial photography, real skin texture, quiet confident expression, warm daylight, brown and cream natural colours. No text, no logos, no watermark. This is illustrative placeholder imagery, not an actual branded product.

### Optical
Use case: product-mockup. Temporary unbranded eyewear editorial still life, natural colour photography, landscape 3:2. One pair of elegant dark tortoiseshell optical glasses with clear lenses, fully visible in three-quarter view, resting on warm ivory travertine stone in soft window light. Spacious minimal composition, refined natural material textures, realistic frame and lenses. No text, no logos. This is an illustrative concept, not an actual brand product.

### Sunglasses
Use case: product-mockup. Temporary unbranded eyewear editorial still life, natural colour photography, landscape 3:2. One pair of bold black rectangular sunglasses, dark lenses, fully visible in three-quarter view resting on sunlit warm beige limestone. Minimal composition with soft shadows and quiet architectural background, premium natural texture, realistic eyewear. No text, no logos, no watermark. Illustrative placeholder, not an actual branded product.

## Replacement
Replace all three with licensed, approved PRYDE photography before launch. Set the supplied logo in src/content/site.ts; no logo was generated. Favicon and social-preview paths are explicit nullable asset slots. Reference screenshots belong only in references/.

## Reference update

The user supplied black-on-white and white-on-black PRYDE logo images and a natural-colour desktop reference in chat. The originals were not exposed as local attachments; their local paths have been requested. Do not substitute a newly generated logo. The current plain-text header remains pending the exact logo file.

A related monochrome reference was found at Downloads/design 2.png and preserved as references/desktop-monochrome-reference.png. The homepage now follows the supplied colour reference's short black navigation, left-side model, right-side headline and three-column category strip. Standalone photography was unavailable, so the following additional illustrative assets were generated using the built-in imagegen tool and saved locally:

- public/images/hero/editorial-reference-placeholder.webp
- public/images/collections/optical-portrait-placeholder.webp

### Updated hero prompt
Use case: photorealistic-natural. Temporary website fashion editorial hero, very wide landscape 3:1 composition, natural colour. Young adult male fashion model with wavy dark hair wearing black rectangular sunglasses, black textured jacket and black shirt, seated beside warm pale limestone columns. Model's complete head and upper body on LEFT THIRD, face around x=32% y=30%, looking to right. Rest of frame RIGHT HALF is softly focused dark warm brown architectural wall with strong natural shade, ample dark empty area for white HTML headline. Golden daylight illuminates face and pale stone on left. Refined luxury editorial, realistic skin, no logos, no text, no graphics, no watermarks. Keep entire head inside frame with space above. This image is illustrative, not actual PRYDE products.

### Optical category portrait prompt
Use case: photorealistic-natural. Temporary eyewear website optical category photograph. Wide landscape 2:1 close-up portrait of a young adult woman with brunette wavy hair, brown eyes and natural freckles wearing large tortoiseshell optical glasses with clear lenses. Looking upward slightly to right. Eyewear and both eyes fully visible, frame centered horizontally, sunlit warm beige architectural background. Natural colour luxury fashion editorial, realistic skin, no logos, no text, no watermark. Illustrative concept not actual PRYDE products.

The previous editorial-placeholder.webp remains preserved but is no longer the home hero. All generated imagery is temporary and not actual PRYDE product photography.
