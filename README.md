# 트릭컬: 아무도 안 했습니다

트릭컬 2차 창작 **싱글 추리 어드벤처** (단간론파형 폐쇄 군상극 · 비살상 "기절" 버전).
**비공식 팬게임 · 비영리.** 트릭컬/에피드게임즈와 무관.

> 현재 스코프: **제1막 〈사라진 간식 창고 — 기절 사건〉만 구현 예정.**
> 이후 막은 데이터 추가로 확장하며, 미구현 막은 엔딩 앨범에 `???`(업데이트 예정)로 표시된다.

## 스택
- Vite + React 18 + TypeScript
- Zustand (게임 상태 / phase 상태머신)
- Tailwind CSS v4
- 저장: localStorage (세이브 스키마 버저닝)
- 배포: Cloudflare Pages (정적 SPA)

## 요구사항
- Node.js >= 20 (`.nvmrc` 참고)

## 시작
```bash
npm install
npm run dev        # 개발 서버
npm run build      # 타입체크 + 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
npm run typecheck  # 타입만 검사
```

## Cloudflare Pages 배포
1. 이 레포를 GitHub에 push
2. Cloudflare Pages → "Connect to Git" → 이 레포 선택
3. 빌드 설정
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. SPA 새로고침 404 방지용 `public/_redirects` 포함됨 (`/* /index.html 200`)

## 폴더 구조
```
src/
├─ engine/          # 도메인 로직 (콘텐츠 비의존)
│  ├─ types.ts        # 코어 타입 (Evidence/Testimony/DebateTopic/Ending/Case ...)
│  ├─ save.ts         # 세이브/로드 + 스키마 버저닝 + 앨범(메타 진행) 분리 저장
│  ├─ testimony.ts    # 증거 제시 판정
│  ├─ debate.ts       # 심문회 모순 판정
│  └─ reconstruction.ts # 재구성 순서 판정
├─ store/
│  └─ gameStore.ts   # Zustand: phase, flags, evidence, mental, sealed, album ...
├─ data/             # ★ 콘텐츠. 여기만 채우면 게임이 늘어남
│  ├─ characters.ts  # 캐스트 14 + 교주
│  ├─ endings.ts     # 엔딩 레지스트리 (앨범)
│  └─ cases/
│     ├─ index.ts    # 사건 등록 + 진행 순서(CASE_ORDER)
│     └─ case01/     # 제1막 (현재 스키마만, implemented:false)
├─ pages/            # phase별 화면 (대부분 Stub)
└─ components/       # DialogueBox / EvidencePanel / Stub ...
```

## 아키텍처 핵심
- **데이터 주도:** 사건은 `CaseDefinition` 객체. 증거·심문·논점·재구성이 전부 데이터라, 새 막은 `src/data/cases/`에 폴더 추가 + `CASE_ORDER`에 등록.
- **세이브 버저닝:** `engine/save.ts`의 `SAVE_VERSION`. 구조가 바뀌면 올리고 `migrate()`에 변환 추가 → 업데이트 후에도 유저 세이브 안 깨짐.
- **메타 진행 분리:** 엔딩 해금(앨범)은 세이브와 별도 키(`tknd:album`)에 저장 → 새 게임/세이브 삭제해도 컬렉션 유지.
- **phase 상태머신:** 라우터 대신 `store.phase`로 화면 전환 (VN/게임 흐름에 적합).

## 새 막 추가하는 법
1. `src/data/cases/caseNN/index.ts`에 `CaseDefinition` 작성 (`implemented: true`)
2. `src/data/cases/index.ts`의 `CASES`와 `CASE_ORDER`에 등록
3. `src/data/endings.ts`에 해당 막 엔딩 추가 (`???` 자리 교체)

## 콘텐츠 채우기
1막 콘텐츠는 `docs/case01_evidence_matrix.md`를 단일 진실원본으로 삼아
`src/data/cases/case01/index.ts`의 `evidences/testimonies/debate/reconstruction/accusation`을 채운다.
다 채우면 `implemented: true`로.

## 에셋 규칙
- 파일명 영문 스네이크 (`char_*`, `bg_*`, `ev_*`, `bgm_*`, `sfx_*`)
- 개발용 공식풍 임시 에셋(`dev_private`)과 공개판 교체본(`public_safe`)을 분리 관리 (공개 배포 시 후자만)

## 설계 문서
`docs/` 참고:
- `game_structure_A.md` — 게임 전체 구조 (A안 기절 게임)
- `case_cast.md` — 캐스트 14 + 슬롯 배치
- `case01_evidence_matrix.md` — 1막 추리 키스톤 (콘텐츠 원본)
- `제1사건_에셋_준비_체크리스트.md` — 에셋 매니페스트
