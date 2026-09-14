import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StartupSidebar } from "../components/StartupSidebar";
import "../index.css";
import "./index.css";
import "./member-actions.css";

const productNarratives = [
  ["معرفی کوتاه استارتاپ", "سامانه ماه، اولین پلتفرم یکپارچه مدیریت شتابدهی است که چرخه حیات استارتاپ‌ها، فرآیند ارزیابی مربیان و مدیریت سرمایه‌گذاران را برای مراکز نوآوری و خانه‌های خلاق تسهیل و هوشمند می‌کند."],
  ["مسئله اصلی", "فرآیندهای ارزیابی و نظارت بر پیشرفت تیم‌های استارتاپی در شتابدهنده‌ها و خانه‌های خلاق به‌شدت دستی، نامنظم و پراکنده است که موجب اتلاف زمان، عدم ارزیابی کیفی منصفانه و عدم شفافیت برای سرمایه‌گذار می‌شود."],
  ["راهکار", "ماه با ارائه داشبوردهای شاخص‌های کلیدی عملکرد (KPI)، ارزیابی چندبعدی مربیان، رصد زمان واقعی پروژه‌ها و پنل اختصاصی سرمایه‌گذاران، چرخه شتابدهی را کاملاً شفاف، خودکار و داده‌محور می‌سازد."],
  ["مشتریان یا کاربران هدف", "شتابدهنده‌های عمومی و سازمانی، خانه‌های خلاق و نوآوری، پارک‌های علم و فناوری، سرمایه‌گذاران خطرپذیر (VC) و صندوق‌های پژوهش و فناوری."],
] as const;

const metrics = [
  ["تعداد مشتریان پرداخت‌کننده", "۱۲ مرکز نوآوری"],
  ["تعداد کاربران فعال سیستم", "۱۵۰ مدیر و مربی"],
  ["نرخ رشد سه‌ماهه اخیر", "۲۵٪"],
  ["درآمد میانگین ماهانه", "۸۰,۰۰۰,۰۰۰ تومان"],
] as const;

type TeamMember = {
  id: number;
  name: string;
  role: string;
  editable?: boolean;
};

const initialMembers: TeamMember[] = [
  { id: 1, name: "علی علوی", role: "هم‌بنیان‌گذار و مدیر فنی (CTO) · تمام‌وقت" },
  { id: 2, name: "سارا حسینی", role: "مدیر محصول و طراح تجربه کاربری · پاره‌وقت" },
];

export default function StartupProfileEditProductTeam() {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>(initialMembers);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigate("/panel/startup/profile");
  };

  const addMember = () => {
    setTeamMembers((current) => [
      ...current,
      { id: Date.now(), name: "", role: "", editable: true },
    ]);
  };

  const updateMember = (id: number, field: "name" | "role", value: string) => {
    setTeamMembers((current) => current.map((member) => (
      member.id === id ? { ...member, [field]: value } : member
    )));
  };

  const removeMember = (id: number) => {
    setTeamMembers((current) => current.filter((member) => member.id !== id));
  };

  const hasAddedMembers = teamMembers.some((member) => member.editable);

  return (
    <div className="startup-panel-page startup-profile-product-edit-page" data-node-id="2084:2" data-name="startup-profile-edit-product-team">
      <StartupSidebar active="profile" />
      <main className="startup-profile-product-edit-content">
        <header className="startup-profile-product-edit-topbar">
          <div><h1>ویرایش پروفایل استارتاپ</h1><p>ویرایش اطلاعات محصول، بازار و اعضای اصلی تیم</p></div>
          <Link to="/panel/startup/profile">بازگشت به پروفایل</Link>
        </header>

        <nav className="startup-profile-product-edit-tabs" aria-label="بخش‌های ویرایش پروفایل">
          <Link to="/panel/startup/profile/edit">اطلاعات پایه و نماینده</Link>
          <span aria-current="page">محصول و تیم</span>
          <Link to="/panel/startup/profile/edit/impact-documents">اثر اجتماعی و مدارک</Link>
        </nav>

        <form onSubmit={handleSubmit}>
          <div className="startup-profile-product-edit-columns">
            <section className="startup-profile-product-edit-card" data-name="product-market-card">
              <h2>محصول و بازار</h2>
              <p className="startup-profile-product-edit-lead">اطلاعات اصلی محصول و مدل کسب‌وکار ثبت‌شده در درخواست استارتاپ</p>
              {productNarratives.map(([label, value]) => (
                <label className="startup-profile-product-edit-narrative" key={label}>
                  <span>{label}</span>
                  <textarea defaultValue={value} />
                </label>
              ))}
            </section>

            <section className={`startup-profile-product-edit-card${hasAddedMembers ? " has-extra-members" : ""}`} data-name="team-business-card">
              <h2>وضعیت محصول، شاخص‌ها و تیم</h2>
              <span className="startup-profile-product-edit-label">وضعیت فعلی محصول</span>
              <div className="startup-profile-product-edit-chips">
                <span>محصول فعال</span><span>دارای مشتری</span><span>دارای درآمد</span>
              </div>
              <label className="startup-profile-product-edit-revenue"><span>مدل درآمدی استارتاپ</span><input defaultValue="فروش اشتراک (SaaS) / کارمزد از سرمایه‌گذاری" /></label>
              <h3>شاخص‌های عملکردی فعلی</h3>
              <div className="startup-profile-product-edit-metrics">
                {metrics.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}
              </div>
              <h3>اعضای اصلی تیم استارتاپ</h3>
              <div className="startup-profile-product-edit-members">
                {teamMembers.map((member) => member.editable ? (
                  <div className="startup-profile-product-edit-member-form" key={member.id}>
                    <input
                      aria-label="نام عضو تیم"
                      placeholder="نام و نام خانوادگی"
                      value={member.name}
                      onChange={(event) => updateMember(member.id, "name", event.target.value)}
                    />
                    <input
                      aria-label="سمت و نقش عضو تیم"
                      placeholder="سمت، نقش و میزان همکاری"
                      value={member.role}
                      onChange={(event) => updateMember(member.id, "role", event.target.value)}
                    />
                    <button type="button" onClick={() => removeMember(member.id)}>حذف</button>
                  </div>
                ) : (
                  <div key={member.id}><strong>{member.name}</strong><span>{member.role}</span></div>
                ))}
              </div>
              <button className="startup-profile-product-edit-add" type="button" onClick={addMember}>+ افزودن عضو جدید به تیم</button>
            </section>
          </div>

          <section className="startup-profile-product-edit-actions" data-name="actions">
            <div><h2>ذخیره تغییرات محصول و تیم</h2><p>تغییرات این بخش پس از ذخیره در پروفایل استارتاپ نمایش داده می‌شود.</p></div>
            <div className="startup-profile-product-edit-action-buttons">
              <button type="submit">ذخیره تغییرات</button>
              <Link to="/panel/startup/profile">انصراف</Link>
              <Link to="/panel/startup/profile/edit/impact-documents">ویرایش اثر اجتماعی و مدارک</Link>
            </div>
          </section>
        </form>
      </main>
    </div>
  );
}
