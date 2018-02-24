import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "ak-chat-bot",
  templateUrl: "chat-bot.component.html",
  styleUrls: ["chat-bot.component.css"]
})
export class ChatBotComponent {
  maxLength = 256;

  chatFormGroup: FormGroup = this.formBuilder.group({
    message: ["", Validators.maxLength(this.maxLength)]
  });

  get message(): string {
    return this.chatFormGroup.get("message").value;
  }

  set message(value: string) {
    this.chatFormGroup.get("message").patchValue(value);
  }

  constructor(private formBuilder: FormBuilder) {}
}
