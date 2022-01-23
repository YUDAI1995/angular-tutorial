import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
})
export class MembersComponent implements OnInit {
  members?: Member[];

  selectedMember?: Member;

  constructor(private memberService: MemberService) {
    // private memberService: MemberService
    //  -> 依存性注入 【DI】 Dependency Injection
    // コンポーネント間の依存性を解決して外部のクラスを簡単に利用できるようにするソフトウェアパターン
  }

  ngOnInit(): void {

    // constructor内では行わない(constructorは自身のプロパティなどを初期化のみを行うため)
    // ngOnInit はコンポーネントが初期化されるタイミングで実行されるライフサイクルメソッド
    this.getMembers();
  }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }

  // mock からデータを取得
  getMembers() :void {
    this.memberService.getMembers() // Observaleが帰ってくる
    .subscribe(members => this.members = members)
  }
}
