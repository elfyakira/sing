import { NextRequest, NextResponse } from "next/server";
import { googleForm } from "@/lib/site";

interface ValidationError {
  field: string;
  message: string;
}

interface ContactFormData {
  inquiryType: string;
  companyName?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  agreed: boolean;
}

const VALID_INQUIRY_TYPES = [
  "サービスについてのお問い合わせ",
  "採用エントリー・応募",
  "その他",
];

function validateContactForm(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  if (!data.inquiryType || !VALID_INQUIRY_TYPES.includes(data.inquiryType)) {
    errors.push({ field: "inquiryType", message: "お問い合わせ種別を選択してください" });
  }

  if (!data.name || data.name.trim().length === 0) {
    errors.push({ field: "name", message: "お名前を入力してください" });
  } else if (data.name.length > 100) {
    errors.push({ field: "name", message: "お名前は100文字以内で入力してください" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.push({ field: "email", message: "メールアドレスを入力してください" });
  } else if (!emailRegex.test(data.email)) {
    errors.push({ field: "email", message: "正しいメールアドレスを入力してください" });
  }

  if (data.phone) {
    const phoneRegex = /^[0-9\-+() ]+$/;
    if (!phoneRegex.test(data.phone)) {
      errors.push({ field: "phone", message: "正しい電話番号を入力してください" });
    }
  }

  if (!data.message || data.message.trim().length === 0) {
    errors.push({ field: "message", message: "ご相談内容を入力してください" });
  } else if (data.message.length > 5000) {
    errors.push({ field: "message", message: "ご相談内容は5000文字以内で入力してください" });
  }

  if (!data.agreed) {
    errors.push({ field: "agreed", message: "プライバシーポリシーに同意してください" });
  }

  return errors;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    const errors = validateContactForm(body);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const formData = new URLSearchParams();
    formData.append(googleForm.entries.inquiryType, body.inquiryType);
    if (body.companyName) {
      formData.append(googleForm.entries.companyName, body.companyName);
    }
    formData.append(googleForm.entries.name, body.name);
    formData.append(googleForm.entries.email, body.email);
    if (body.phone) {
      formData.append(googleForm.entries.phone, body.phone);
    }
    formData.append(googleForm.entries.message, body.message);
    if (body.agreed) {
      formData.append(googleForm.entries.consent, "同意");
    }

    const response = await fetch(googleForm.formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (!response.ok && response.status >= 500) {
      throw new Error(`Google Form submission failed: ${response.status}`);
    }

    return NextResponse.json({
      success: true,
      message: "お問い合わせを受け付けました。",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        errors: [{ field: "general", message: "送信中にエラーが発生しました。しばらく経ってから再度お試しください。" }],
      },
      { status: 500 }
    );
  }
}
