# case01_evidence_matrix.md
# 제1사건 〈사라진 간식 창고〉 — 추리 키스톤 문서

> 이 문서가 글(대사)·데이터(플래그/ID)·코드(분기)의 단일 진실원본(source of truth).
> 여기서 어긋나면 게임이 어긋남. 대사/에셋보다 **항상 이 문서를 먼저** 고친다.

---

## 0. 확정된 전제 (0번 결정)

| 항목 | 결정 |
|---|---|
| 교주 | 1인칭 무얼굴 (초상화 0장, 추궁은 컷인/대사창/멘탈게이지로) |
| 기준 해상도 | 1920×1080, 16:9 고정. 모바일 후순위 |
| 화풍 | 캐릭터 공식/SD풍 · 배경 AI(채도↓·외곽선 약) · UI 둥근테두리/파스텔 |
| 리소스 분리 | `dev_private_assets/`(공식풍 임시) ↔ `public_safe_assets/`(교체본). 공개판은 후자만 |
| 파일명 | 전부 영문 소문자 + 스네이크. 한글 파일명 금지 |

---

## 1. 사건 진상 (한 문단 요약)

표면 사건은 "간식 창고가 통째로 비었다 = 절도". **하지만 절도는 일어나지 않았다.**
시온이 배급 혼란을 막으려 간식을 임시 이동하려 했고(악의 없음), 코미가 그 부탁으로 출입 기록 일부를 지웠다. 그 사이 칸나가 위험을 감지한 창고 안 마법진이 오작동해 창고 내부 공간이 다른 공간과 연결됐고, 간식은 **밖으로 운반된 게 아니라 그 연결된 공간으로 빨려 들어갔다**. 에르핀은 간식을 노리고 접근했지만 안에 못 들어갔고, 네르는 안쪽 소리를 듣고 구하려 문을 부쉈다.
→ **모두 수상하지만 아무도 "범인"은 아니다.** 가장 책임이 가까운 건 독단으로 일을 벌인 시온. (제목: 아무도 안 했습니다)

- **진범(책임 주체):** 시온 — 악의 없음
- **진짜 목적:** 절도가 아니라 배급 체계 정상화를 위한 독단적 간식 이동
- **사건 원리:** 창고 안 마법진의 공간 연결 오작동

---

## 2. 사건 타임라인 (Ground Truth)

| 시각 | 사건 | 관련 인물 | 흔적이 되는 증거 |
|---|---|---|---|
| 20:00 | 시온이 배급 장부 확인 | 시온 | ev_sion_ledger / ev_ledger_gap |
| 20:20 | 시온이 간식 임시 이동 계획 | 시온 | ev_sion_ledger_access |
| 20:35 | 코미가 출입 기록 일부 삭제(시온 부탁) | 코미 | ev_deleted_access_log / ev_comi_edit_trace |
| 20:50 | 칸나가 창고 마법진 이상 감지 | 칸나 | ev_kanna_warning / ev_kanna_memo |
| 21:10 | 에르핀이 간식 노리고 창고 접근(진입 실패) | 에르핀 | ev_sugar_footprint / ev_footprint_direction |
| 21:15 | 마법진 오작동 시작 | (무인) | ev_magic_circle |
| 21:18 | 네르가 안쪽 소리 듣고 문 파손 | 네르 | ev_ner_glove / ev_impact_sound_witness |
| 21:20 | 창고 내부 공간 뒤틀림 → 간식이 연결 공간으로 이동 | (현상) | ev_magic_circle_doc |
| 익일 08:00 | 사건 발견 | 전원 | — |

> 단톡방 로그·게시판 글·출입 기록·심문 증언·최종 재구성은 **전부 이 표에서 역산**해 작성한다.

---

## 3. 오해 구조 (수상한 점 ↔ 실제)

| 인물 | 표면상 수상한 점 | 실제 숨긴 것 | 심문에서 깨질 거짓말 |
|---|---|---|---|
| 에르핀 | 간식을 노렸다 | 훔치려다 진입 실패 | "창고 근처에 안 갔어" |
| 네르 | 문을 부쉈다 | 안쪽 소리 듣고 구하려 함 | "문은 안 건드렸어" |
| 시온 | 장부를 수정했다 | 간식을 몰래 이동시킴 | "장부는 수정 안 했습니다" |
| 칸나 | 마법진을 알았다 | 공간 이상을 예견함 | (모순 아님 / 해설형) |
| 코미 | 기록을 삭제했다 | 시온의 부탁을 받음 | "기록은 자동으로 비었습니다" |

---

## 4. 증거 마스터 리스트

`updated`는 갱신 2단계 증거(조사 심화 시 설명이 바뀜). `derived`는 조합으로만 생기는 파생 카드(이미지 없이 텍스트 카드 가능).

| ID | 표시 이름 | 분류 | 획득 위치 | 비고 |
|---|---|---|---|---|
| ev_lock_broken | 부서진 자물쇠 | 물증 | 간식 창고 | → ev_lock_inside_broken으로 갱신 |
| ev_lock_inside_broken | 안쪽에서 부서진 자물쇠 | 물증(updated) | 간식 창고(심화) | 파손 방향 안쪽 = 공간 압력 |
| ev_sugar_footprint | 설탕 묻은 발자국 | 현장 | 간식 창고/복도 | 에르핀 의심 유발 |
| ev_footprint_direction | 발자국 방향 | 현장(updated) | 복도(심화) | 안으로가 아니라 앞에서 돌아감 |
| ev_empty_plate | 비어 있는 접시 | 현장 | 식당 | 에르핀 알리바이 반박용 |
| ev_empty_box | 빈 상자 | 현장 | 간식 창고 | 운반 아님 정황 |
| ev_pudding_list | 어제 남은 푸딩 목록 | 기록 | 식당 | 간식 수량 대조 |
| ev_sion_ledger | 시온의 배급 장부 | 기록 | 기록실 | — |
| ev_ledger_gap | 배급 장부의 이상한 공백 | 기록 | 기록실/일상선택 | 시온 동기 단서 |
| ev_sion_ledger_access | 시온의 장부 접근 기록 | 기록 | 기록실 | **핵심 증거** |
| ev_deleted_access_log | 삭제된 출입 기록 | 기록 | 기록실 | 코미 행위 단서 |
| ev_comi_edit_trace | 코미의 수정 흔적 | 기록 | 기록실 | **공범성 증거** |
| ev_deleted_photo | 삭제된 사진 기록 | 채팅로그 | 단톡방 | 에르핀 "나 아님" 연결 |
| ev_magic_circle | 창고 안 마법진 | 마법흔적 | 간식 창고 | **사건 원리** |
| ev_magic_circle_doc | 마법진 해석서 | 기록 | 예배당 | 공간 연결 입증 |
| ev_kanna_memo | 칸나의 메모 | 기록 | 예배당 | 예견 정황 |
| ev_kanna_warning | 칸나의 경고 | 증언 | 일상(칸나 대화) | 일상 선택 시 선취득 |
| ev_ner_glove | 네르의 부서진 장갑 조각 | 물증 | 복도 | 문 파손자 = 네르 |
| ev_drag_mark | 끌린 자국 | 현장 | 복도 | 운반 의심(레드헤링) |
| ev_erpin_snack_list | 에르핀의 간식 목록 | 물증 | 에르핀의 방 | 동기 정황 |
| ev_impact_sound_witness | 안쪽 충격음 목격담 | 증언 | 게시판/심문 | 네르 무죄 입증 |
| ev_space_connection | 공간 연결 가능성 | derived | 조합 | ev_magic_circle + ev_kanna_warning |
| ev_missing_footprint_time | 사라진 발자국 시간대 | derived | 조합 | ev_sugar_footprint + ev_deleted_access_log |

---

## 5. 개별 심문 매트릭스

표기: 제시(증거 들이대기) / 추궁(증거 없이 캐묻기). `→` 성공 시.

### 에르핀 (char_erpin)
| ID | 증언 | 대응 | 모순 증거 | → 밝혀지는 사실 | 해금/플래그 |
|---|---|---|---|---|---|
| E-01 | "어젯밤 창고 근처에 안 갔어." | 제시 | ev_sugar_footprint | 창고 앞까진 갔다(진입 실패) | flag_erpin_admits_approach, 압박+ |
| E-02 | "간식 냄새 같은 건 몰라." | 추궁 | — | 추가 증언(방에 간식 목록) | ev_erpin_snack_list 단서 |
| E-03 | "접시는 원래 비어 있었어." | 제시 | ev_pudding_list | 어제까진 간식이 있었다 | 압박+ |
| E-04 | "삭제한 사진? 나 아님." | 제시 | ev_deleted_photo | 창고 근처에서 사진 찍고 지움 | flag_erpin_photo |

### 시온 (char_sion)
| ID | 증언 | 대응 | 모순 증거 | → 밝혀지는 사실 | 해금/플래그 |
|---|---|---|---|---|---|
| S-01 | "장부는 어제 수정하지 않았습니다." | 제시 | ev_sion_ledger_access | 시온이 배급량을 몰래 수정 | flag_sion_pressure_1 |
| S-02 | "간식 이동 같은 건 계획한 적 없습니다." | 제시 | ev_ledger_gap | 임시 이동을 계획했음 | flag_sion_plan |
| S-03 | (압박 100%) "맞아요, 옮기려 했습니다. 절도는 아닙니다." | — | — | 진짜 목적=배급 정상화 자백 | flag_sion_confess (체념 표정) |

### 네르 (char_ner)
| ID | 증언 | 대응 | 모순 증거 | → 밝혀지는 사실 | 해금/플래그 |
|---|---|---|---|---|---|
| N-01 | "문은 내가 안 건드렸어." | 제시 | ev_ner_glove | 문을 부순 건 네르 | flag_ner_admits_break, 진술 갱신 |
| N-02 | "그냥 부수고 싶어서 부쉈다고 쳐." | 제시 | ev_impact_sound_witness | 안쪽 소리 듣고 구하려 부숨(무죄) | flag_ner_innocent |

### 칸나 (char_kanna) — 모순형 아님, 해설형
| ID | 증언 | 대응 | 연결 증거 | → 밝혀지는 사실 | 해금/플래그 |
|---|---|---|---|---|---|
| K-01 | "창고는 그대로였지만, 안은 아닐 수 있어요." | 연결 | ev_magic_circle | 공간 연결 가능성 | ev_space_connection 해금 |
| K-02 | "그건 아직 일어나지 않은 일이에요." | 추궁 | — | 칸나가 사전에 위험을 예견 | flag_kanna_foresaw (숨겨진 진실) |

### 코미 (char_comi)
| ID | 증언 | 대응 | 모순 증거 | → 밝혀지는 사실 | 해금/플래그 |
|---|---|---|---|---|---|
| C-01 | "기록은 자동으로 비었습니다." | 제시 | ev_comi_edit_trace | 코미가 직접 기록을 지움 | flag_comi_admits_edit |
| C-02 | "왜 지웠는지는 말 못 해요." | 제시 | ev_deleted_access_log | 누군가의 부탁(→시온) | flag_comi_protect (숨겨진 진실), 시온 의심+ |

---

## 6. 교단 심문회 논점 매트릭스

> **정합성 핵심:** "자물쇠(lock)"는 안쪽 압력으로 파손(마법진), "문(door)"은 네르가 부숨. 둘은 다른 사건. 대사에서 혼용 금지.

| ID | 논점 | 정답 증거 | 결론 | 클리어 플래그 |
|---|---|---|---|---|
| T-01 | 문(자물쇠)은 어떻게 열렸나? | ev_lock_inside_broken | 밖에서 연 게 아니라 안쪽에서 압력이 가해졌다 | flag_trial_topic_1_clear |
| T-02 | 에르핀은 범인인가? | ev_footprint_direction | 발자국은 진입이 아니라 앞에서 돌아간 흔적 = 무죄 | flag_trial_topic_2_clear |
| T-03 | 네르는 왜 문을 부쉈나? | ev_ner_glove + ev_impact_sound_witness | 범행이 아니라 안쪽 이상현상에 반응 = 무죄 | flag_trial_topic_3_clear |
| T-04 | 간식은 어디로 갔나? | ev_magic_circle + ev_magic_circle_doc | 운반된 게 아니라 연결된 공간으로 이동 | flag_trial_topic_4_clear |
| T-05 | 누가 이 상황을 의도했나? | ev_sion_ledger_access + ev_deleted_access_log + ev_comi_edit_trace | 시온이 이동 계획, 코미가 기록 삭제 | flag_trial_topic_5_clear |

**반박 난입 (T-04 중):** 네르 "그냥 누가 들고 튄 거겠지" → 제시 `ev_magic_circle`(위치) → 깨짐. (오답 후보: ev_empty_plate / ev_ner_glove / ev_deleted_access_log)

---

## 7. 최종 재구성 + 최종 지목

### 재구성 카드 정답 순서 (recon_card_*)
1. 시온이 배급 혼란을 막으려 간식 이동을 계획했다 (recon_card_1)
2. 코미가 시온의 부탁으로 출입 기록 일부를 지웠다 (recon_card_2)
3. 칸나가 창고 마법진의 위험을 눈치챘다 (recon_card_3)
4. 에르핀이 간식을 노리고 창고에 접근했다 (recon_card_4)
5. 마법진이 오작동해 창고 내부 공간이 뒤틀렸다 (recon_card_5)
6. 네르가 안쪽 소리를 듣고 문을 부쉈다 (recon_card_6)
7. 간식은 밖이 아니라 연결된 공간으로 이동했다 (recon_card_7)

오답 피드백 예: "순서는 맞지만 이 행동의 목적이 다르다" / "이 사건은 네르가 문을 부수기 전에 일어났다."

### 최종 지목 (3단)
| 항목 | 정답 |
|---|---|
| 진범 | 시온 |
| 핵심 증거 | ev_sion_ledger_access |
| 진짜 목적 | 절도가 아니라 배급 체계 정상화를 위한 독단적 이동 |

(보조: 공범성 ev_comi_edit_trace, 사건 원리 ev_magic_circle)

---

## 8. 핵심 플래그 (flag_*)

```txt
# 조사 단계
flag_found_broken_lock
flag_updated_lock_inside
flag_found_sugar_footprints
flag_found_footprint_direction
flag_found_magic_circle
flag_found_sion_log
flag_found_comi_edit
flag_found_deleted_access_log
flag_found_ner_glove
flag_picked_kanna_warning      # 일상 파트 선택 시 선취득

# 심문 단계
flag_questioned_erpin / sion / ner / kanna / comi
flag_erpin_admits_approach
flag_erpin_photo
flag_sion_pressure_1
flag_sion_plan
flag_sion_confess
flag_ner_admits_break
flag_ner_innocent
flag_comi_admits_edit
flag_comi_protect              # 숨겨진 진실
flag_kanna_foresaw             # 숨겨진 진실

# 조합/파생
flag_unlocked_space_connection
flag_unlocked_missing_footprint_time

# 심문회 단계
flag_trial_topic_1_clear ~ flag_trial_topic_5_clear
flag_rebuttal_ner_broken

# 종결
flag_final_reconstruction_clear
flag_culprit_pointed_correct
flag_true_ending             # 숨겨진 진실 3개 전부 해금 시
```

> 규칙: **플레이어가 해당 flag를 얻기 전엔, 그 사실을 아는 대사를 출력하지 않는다.** (조사·심문 가능 조건 게이팅)

---

## 9. 숨겨진 진실 (S랭크 조건)

공식 진상(시온이 간식을 옮기려 했다) 외에, 아래 3개를 모두 밝혀야 진엔딩/S랭크.

- 칸나는 창고가 이상해질 것을 미리 알고 있었다 → `flag_kanna_foresaw` (K-02)
- 코미는 시온(누군가)을 보호하려고 기록을 지웠다 → `flag_comi_protect` (C-02)
- 에르핀은 훔치려 했지만, 결과적으로 사건을 막을 뻔했다 → 에르핀 루트 추가 추궁

S랭크: 핵심 증거 전부 수집 + 숨겨진 진실 3개 + 오답 3회 이하 + 힌트 1회 이하.

---

## 10. 정합성 메모 (글 쓸 때 절대 어기지 말 것)

1. **자물쇠 ≠ 문.** 자물쇠는 마법진 압력으로 안쪽 파손 / 문은 네르가 외부에서 부숨. 두 사건 시각·주체 다름(21:15 vs 21:18).
2. **간식은 도난당하지 않았다.** "훔쳤다/들고 나갔다"는 전부 오답/레드헤링 방향. 정답은 "공간 이동".
3. **시온은 진범이되 악인이 아니다.** 추궁 톤은 "범죄 자백"이 아니라 "독단 인정". 체념 표정(char_sion_confess)으로 처리.
4. **에르핀은 접근만, 진입 실패.** 발자국이 "앞에서 돌아감"이 핵심. 안으로 들어간 묘사 금지.
5. **칸나는 거짓말을 안 한다.** 진실을 말하는데 수상하게 들릴 뿐. 모순 제시 대상이 아니라 "연결/해설" 대상.
6. **게이팅:** 단톡방/게시판/출입기록(객관) ↔ 심문(주관)이 교차해야 함. 객관 증거로 주관 증언을 깨는 구조 유지.

---

## 다음에 이 문서에서 파생될 문서
```txt
case01_timeline.md        ← 2장 확장 (단톡방/게시판 로그 원천)
case01_flags.md           ← 8장 정식화 (타입/초기값)
case01_dialogue_script.md ← 5·6장에 대사 입히기
case01_trial_topics.md    ← 6장 데이터화
case01_reconstruction.md  ← 7장 데이터화
asset_manifest.csv        ← 4·5·6장 ID 기준 에셋 행 생성
```
