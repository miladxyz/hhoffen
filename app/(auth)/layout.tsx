import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "../globals.css";

import { ClerkProvider } from "@clerk/nextjs";

const inter = Vazirmatn({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "هفن",
  description: "فروشگاه لباس هفن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localization = {
    userButton: {
      action__addAccount: 'اضافه کردن حساب',
      action__manageAccount: 'مدیریت حساب',
      action__signOut: 'خروج',
      action__signOutAll: 'خروج از حساب',
    },
    backButton: 'بازگشت',
    formFieldAction__forgotPassword: 'فراموشی رمز عبور؟',
    formFieldLabel__emailAddress: 'ایمیل',
    formFieldInputPlaceholder__emailAddress: 'ایمیل',
    formFieldInputPlaceholder__password: 'رمز عبور',
    formFieldLabel__password: 'رمز عبور',
    socialButtonsBlockButton: 'وارد شوید به هفن ',
    signUp: {
      start: {
        title: 'ساخت حساب کاربری',
        subtitle: 'ورود به هفن',
        actionText: 'حساب کاربری دارید؟',
        actionLink: 'ورود',
      },
      emailLink: {
        title: 'ایمیل خود را تایید کنید',
        subtitle: 'برای ادامه ورود به هفن',
        formTitle: 'پیوند تأیید',
        formSubtitle: 'از پیوند تأیید ارسال شده به آدرس ایمیل خود استفاده کنید',
        resendButton: "لینکی دریافت نکردید؟ ارسال مجدد",
        verified: {
          title: 'با موفقیت ثبت نام کرد',
        },
        loading: {
          title: 'ثبت نام...',
        },
        verifiedSwitchTab: {
          title: 'ایمیل با موفقیت تأیید شد',
          subtitle: 'برای ادامه به تب تازه باز شده برگردید',
          subtitleNewTab: 'برای ادامه به برگه قبلی برگردید',
        },
      },
    },
    footerActionLink__useAnotherMethod: 'از روش دیگری استفاده کنید',
    signIn: {
      emailCode: {
        formTitle: 'کد تایید',
        resendButton: "کد دریافت نکردید؟ ارسال مجدد",
        subtitle: 'برای ورود به هفن',
        title: 'ایمیل خود را چک کنید',
      },
      start: {
        title: 'ورود به هفن',
        subtitle: 'خوش آمدید! لطفا برای ادامه وارد شوید',
        actionText: 'ساخت حساب کاربری؟',
        actionLink: 'ثبت نام',
      },
      password: {
        actionLink: 'از روش دیگری استفاده کنید',
        subtitle: 'رمز عبور مرتبط با حساب خود را وارد کنید',
        title: 'رمز عبور خود را وارد کنید',
      },
      alternativeMethods: {
        actionLink: 'کمک بگیرید',
        actionText: 'هیچ کدام از اینها را ندارید؟',
        blockButton__backupCode: 'از یک کد پشتیبان استفاده کنید',
        blockButton__emailCode: 'ارسال کد به {{identifier}}',
        blockButton__emailLink: 'لینک ایمیل به {{identifier}}',
        blockButton__passkey: 'با رمز عبور خود وارد شوید',
        blockButton__password: 'با رمز عبور خود وارد شوید',
        blockButton__phoneCode: 'ارسال کد پیامکی به {{identifier}}',
        blockButton__totp: 'از برنامه احراز هویت خود استفاده کنید',
        getHelp: {
          blockButton__emailSupport: 'پشتیبانی ایمیل',
          content:
            'اگر برای ورود به حساب خود مشکل دارید، به ما ایمیل بزنید تا در اسرع وقت با شما همکاری کنیم تا دسترسی را بازیابی کنیم.',
          title: 'کمک بگیرید',
        },
        subtitle: 'مواجهه با مسائل؟ می توانید از هر یک از این روش ها برای تأیید استفاده کنید.',
        title: 'از روش دیگری استفاده کنید',
      },
    },
    formButtonPrimary: 'ادامه',
    emailLink: {
      loading: {
        subtitle: 'به زودی منتقل می‌شوید',
        title: 'در حال ورود...',
      },
    },
    unstable__errors: {
      zxcvbn: {
        couldBeStronger: 'رمز عبور شما کار می کند، اما می تواند قوی تر باشد. سعی کنید کاراکترهای بیشتری اضافه کنید.',
        goodPassword: 'رمز عبور شما تمام شرایط لازم را دارد.',
        notEnough: 'رمز عبور شما به اندازه کافی قوی نیست.',
        suggestions: {
          allUppercase: 'برخی از حروف را بزرگ کنید، اما نه همه.',
          anotherWord: 'کلمات کمتری را اضافه کنید.',
          associatedYears: 'از سال هایی که مربوط به شما است دوری کنید.',
          capitalization: 'بیشتر از حرف اول را بزرگ کنید',
          dates: 'از تاریخ ها و سال هایی که با شما مرتبط هستند اجتناب کنید.',
          l33t: "از جایگزینی حروف قابل پیش بینی مانند «@» برای «a» اجتناب کنید.",
          longerKeyboardPattern: 'از الگوهای صفحه کلید طولانی تر استفاده کنید و جهت تایپ را چندین بار تغییر دهید.',
          noNeed: 'شما می توانید بدون استفاده از نمادها، اعداد یا حروف بزرگ رمزهای عبور قوی ایجاد کنید.',
          pwned: 'اگر از این رمز عبور در جای دیگری استفاده می کنید، باید آن را تغییر دهید.',
          recentYears: 'از سال های اخیر اجتناب کنید.',
          repeated: 'از کلمات و شخصیت های تکراری خودداری کنید.',
          reverseWords: 'از املای معکوس کلمات رایج خودداری کنید.',
          sequences: 'از توالی کاراکترهای رایج خودداری کنید.',
          useWords: 'از چند کلمه استفاده کنید، اما از عبارات رایج اجتناب کنید.',
        },
      },
    },
    userProfile: {
      start:{
        headerTitle__account: 'Profile ddddetails',
        headerTitle__security: 'Secdssdgdgurity',
      },
      navbar: {
        account: 'پروفایل',
        description: 'مدیریت اطلاعات حساب',
        security: 'امنیت',
        title: 'حساب کاربری',
      },
    }
  }
  return (
    <ClerkProvider localization={localization}>
      <html lang="en" suppressHydrationWarning={true} dir="rtl">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
