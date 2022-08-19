<h1>최종 구현</h1>
<hr>
<h2>Auth</h2>
![녹화_2022_08_19_22_45_33_172](https://user-images.githubusercontent.com/94844343/185634254-2d014d43-a608-4042-9e2e-968258ea2627.gif)
<h2>To Do<h2>
![녹화_2022_08_19_22_46_55_713](https://user-images.githubusercontent.com/94844343/185634276-492b3180-4a3f-4203-9e91-ec7de4bd9ecc.gif)

<h1 dir="auto"><a id="user-content-1-2-클라이언트-구현-과제-안내" class="anchor" aria-hidden="true" href="#1-2-클라이언트-구현-과제-안내"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>과제 설명 </h1>
<h2 dir="auto"><a id="user-content-assignment-1---login--signup" class="anchor" aria-hidden="true" href="#assignment-1---login--signup"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Assignment 1 - Login / SignUp</h2>

<ul dir="auto">
<li>/auth 경로에 로그인 / 회원가입 기능을 개발합니다
<ul class="contains-task-list">
<li>로그인, 회원가입을 별도의 경로로 분리해도 무방합니다</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요</li>
</ul>
</li>
<li>이메일과 비밀번호의 유효성을 확인합니다
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 이메일 조건 : 최소 <code>@</code>, <code>.</code> 포함</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 비밀번호 조건 : 8자 이상 입력</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요</li>
</ul>
</li>
<li>로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요</li>
</ul>
</li>
</ul>
<h2 dir="auto"><a id="user-content-assignment-2---todo-list" class="anchor" aria-hidden="true" href="#assignment-2---todo-list"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Assignment 2 - Todo List</h2>
<ul dir="auto">
<li>
<p dir="auto">Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 목록 / 상세 영역으로 나누어 구현해주세요</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Todo 목록을 볼 수 있습니다.</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.</li>
</ul>
</li>
<li>
<p dir="auto">한 화면 내에서 Todo List와 개별 Todo의 상세를 확인할 수 있도록 해주세요.</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 새로고침을 했을 때 현재 상태가 유지되어야 합니다.</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 개별 Todo를 조회 순서에 따라 페이지 뒤로가기를 통하여 조회할 수 있도록 해주세요.</li>
</ul>
</li>
<li>
<p dir="auto">한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요</p>
<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다</li>
</ul>
</li>
</ul>

-ref
https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api#assignment-1---login--signup

