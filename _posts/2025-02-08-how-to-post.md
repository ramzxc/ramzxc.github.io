---
layout: post
title: Jekyll로 포스트 작성하는 법
date: 2025-02-08 06:06 +0900
description: Jekyll 형식으로 포스트 작성하고 Github Pages에 올리는 법까지
authors: [ramzxc]
categories: [dev]
tags: blog 
---

Jekyll에서 어떤 식으로 포스트를 작성하고 업로드할 수 있는지 알아보도록 하자.

## 파일 생성

chirpy 테마를 기준으로 `_posts` 폴더에 `.md`의 확장자를 가진 마크다운 파일을 생성하는 것이 첫 번째 임무다. 

파일의 이름은 `2025-02-08-how-to-post.md`처럼, `<year>-<month>-<date>-<title>.md`의 형식으로 써주어야 한다. 만약 제목 앞에 날짜를 적지 않게 되면 글을 인식하지 않아 블로그에 글이 보이지 않으므로 주의하도록 하자.

## Front Matter 생성

```md
---
layout: post
title: Jekyll을 이용한 Github Pages에서 포스트 작성하는 법
date: 2025-02-08 06:06 +0900
description: Jekyll 형식으로 포스트 작성하고 Github Pages에 올리는 법까지
authors: [ramzxc]
categories: [dev]
tags: blog 
---
```

미리 생성한 마크다운 파일 맨 위에 위처럼 작성하면 된다. 위에 적힌 것들 외에도 사용할 수 있는 여러 predefined variables가 있고, 본인이 사용하고 있는 각 theme마다 또 여러 기능이 있을 수 있으니 자세한 정보는 [Jekyll docs](https://jekyllrb.com/docs/front-matter/)와 본인이 사용하는 테마의 documentation을 참고 바란다.

## 포스트 내용 적기

위에서 만든 Front Matter 밑에 익숙한 마크다운 형식 그대로를 사용해 업로드하고 싶은 글을 적으면 된다. 마크다운 문법에 익숙하다면 딱히 새롭거나 어려울 점은 없다.

## 로컬에서 테스트하기

글이 제대로 올라갔는지 확인하거나 미리 보고싶을 때 블로그를 로컬에서 실행해볼 수 있다. 

ruby 설치, jekyll 설치, Github Pages 생성 등 미리 준비해야 하는 것들이 모두 되어있다고 가정할 때, `<handle>.github.io` 폴더에서 터미널을 실행하여 명령어 `bundle exec jekyll serve`를 입력하면 된다.

## 업로드하기

로컬에서 아무런 문제도 발견하지 못했다면 커밋을 통해 Pages에 바로 업로드할 수 있다.