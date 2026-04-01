import React, { useState } from 'react';
import { 
  BookOpen, 
  Target, 
  LayoutList, 
  GitCompare, 
  PenTool, 
  Lightbulb, 
  CheckCircle2, 
  XCircle,
  FileText,
  ListChecks,
  ArrowRight,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

function CollapsibleBlock({ title, subtitle, children, defaultExpanded = false }: { title: string, subtitle?: string, children: React.ReactNode, defaultExpanded?: boolean }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="bg-slate-100 rounded-2xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 flex items-center justify-between bg-slate-100 hover:bg-slate-200/50 transition-colors text-left focus:outline-none"
      >
        <strong className="text-slate-800 text-lg">
          {title} {subtitle && <span className="text-slate-500 font-normal">{subtitle}</span>}
        </strong>
        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-500 flex-shrink-0 ml-4" /> : <ChevronDown className="w-5 h-5 text-slate-500 flex-shrink-0 ml-4" />}
      </button>
      {isExpanded && (
        <div className="p-6 pt-0">
          <div className="border-t border-slate-200/50 pt-4 space-y-4">
            {children}
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-sky-200 to-blue-200 text-slate-800 font-sans selection:bg-indigo-200 pb-20">
      {/* Header */}
      <header className="bg-indigo-700 text-white py-16 px-6 text-center shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-indigo-600 px-4 py-1.5 rounded-full text-indigo-100 font-semibold text-sm mb-6 tracking-wide uppercase">
            IT BA Sharing Session
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            <span className="inline-block">Use Case Specification</span>
            <span className="text-indigo-300 font-light mx-3 md:mx-4 italic inline-block">vs</span> 
            <span className="inline-block">Acceptance Criteria</span>
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto opacity-90 text-balance">
            Hiểu đúng bản chất, cấu trúc và cách áp dụng thực tế trong dự án phần&nbsp;mềm.
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 md:px-6 mt-12 space-y-20">
        
        {/* 1. Nó là cái gì? */}
        <section id="section-1" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">1. Nó là cái gì?</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-slate-800">Use Case Specification</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Là tài liệu mô tả chi tiết <strong>cách thức người dùng (Actor) tương tác với hệ thống (System)</strong> để đạt được một mục tiêu cụ thể.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 text-blue-800 text-sm">
                <strong>Trọng tâm:</strong> "Luồng hành vi" (Flow of events) – từng bước step-by-step hệ thống và người dùng "nói chuyện" với nhau.
              </div>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <LayoutList className="w-4 h-4 text-slate-400" />
                  Thường đi kèm với:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Use Case Diagram</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Tài liệu SRS / BRD</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Mô hình Waterfall</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <ListChecks className="w-6 h-6 text-emerald-600" />
                <h3 className="text-xl font-bold text-slate-800">Acceptance Criteria (AC)</h3>
              </div>
              <p className="text-slate-600 leading-relaxed mb-4">
                Là tập hợp các điều kiện, quy tắc mà một tính năng <strong>phải đáp ứng để được chấp nhận là "Đã hoàn thành" (Done)</strong>.
              </p>
              <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 text-emerald-800 text-sm">
                <strong>Trọng tâm:</strong> "Kết quả và Ranh giới" (What & Boundaries) – không quan tâm quá nhiều đến việc click vào đâu, bước 1 bước 2 là gì.
              </div>
              <div className="mt-5 pt-5 border-t border-slate-100">
                <p className="text-sm font-semibold text-slate-700 mb-2 flex items-center gap-2">
                  <LayoutList className="w-4 h-4 text-slate-400" />
                  Thường đi kèm với:
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">User Story</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Product Backlog Item (PBI)</span>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">Mô hình Agile / Scrum</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ecosystem Explanation */}
          <div className="mt-8 bg-slate-800 rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 translate-y-1/2"></div>
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
              <LayoutList className="w-5 h-5 text-indigo-300" />
              Chúng thường đi kèm với tài liệu nào?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 relative z-10">
              <div className="space-y-4">
                <div className="text-indigo-200 font-semibold uppercase tracking-wider text-sm">Với Use Case Specification</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Thường là "trái tim" của phương pháp phân tích truyền thống. Nó hiếm khi đứng một mình mà nằm trong một bộ tài liệu lớn hơn.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Nằm trong tài liệu <strong>BRD</strong> (Business Requirements Document) hoặc <strong>SRS</strong> (Software Requirements Specification).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Đi kèm với <strong>Use Case Diagram</strong> (Sơ đồ Use Case) để minh họa trực quan.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Phổ biến trong mô hình <strong>Waterfall</strong> hoặc các dự án Outsource cần chốt scope chặt chẽ.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <div className="text-emerald-200 font-semibold uppercase tracking-wider text-sm">Với Acceptance Criteria</div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Là thành phần không thể thiếu của phương pháp Agile. Nó là "bản hợp đồng mini" để nghiệm thu một tính năng nhỏ.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Đính kèm trực tiếp bên trong một <strong>User Story</strong> (Ví dụ: As a user, I want to... so that...).</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Nằm trong các <strong>Product Backlog Item (PBI)</strong> trên Jira, Trello, Azure DevOps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                    <span className="text-sm text-slate-200">Phổ biến trong mô hình <strong>Agile / Scrum</strong>, phục vụ trực tiếp cho Sprint Planning và Testing.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Tại sao lại cần nó? */}
        <section id="section-2" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Target className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">2. Tại sao lại cần nó?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-blue-600 text-white px-6 py-4 font-bold text-lg text-center">
                Lợi ích của Use Case Specification
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Góc nhìn toàn diện</strong>
                    <span className="text-slate-600 text-sm">Thấy rõ luồng thành công (Happy path), rẽ nhánh (Alternate) và lỗi (Exception).</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Phát hiện lỗ hổng logic</strong>
                    <span className="text-slate-600 text-sm">Viết step-by-step giúp BA dễ nhận ra các trường hợp bị sót (edge cases).</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-blue-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Tài liệu hóa dài hạn</strong>
                    <span className="text-slate-600 text-sm">Lưu trữ làm tài liệu hệ thống (System Documentation) cho việc bảo trì.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="bg-emerald-600 text-white px-6 py-4 font-bold text-lg text-center">
                Lợi ích của Acceptance Criteria
              </div>
              <div className="p-6 space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Định nghĩa chữ "Done"</strong>
                    <span className="text-slate-600 text-sm">Giúp Dev biết code đến đâu là đủ, tránh làm thiếu hoặc "vẽ rắn thêm chân".</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Cơ sở để Test</strong>
                    <span className="text-slate-600 text-sm">QA/Tester nhìn vào AC để viết Test Case. AC pass nghĩa là tính năng pass.</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <div>
                    <strong className="block text-slate-800">Đồng bộ kỳ vọng</strong>
                    <span className="text-slate-600 text-sm">Đảm bảo Khách hàng, BA, Dev và QA hiểu chung mục tiêu trước khi làm.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Cấu trúc của mỗi cái */}
        <section id="section-3" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <LayoutList className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">3. Cấu trúc của mỗi cái</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* UC Structure */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                Cấu trúc Use Case Spec
              </h3>
              <div className="overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="p-3 font-bold text-slate-700 border-r border-slate-200 w-1/3">Thành phần</th>
                      <th className="p-3 font-bold text-slate-700">Mô tả</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      { name: '1. Use Case Name', desc: 'Tên Use Case (VD: UC01 - Đăng nhập)' },
                      { name: '2. Description', desc: 'Mô tả ngắn gọn mục đích của Use Case' },
                      { name: '3. Actor', desc: 'Ai/Cái gì thực hiện? (VD: Khách hàng, Hệ thống khác, System Timer/Scheduler)' },
                      { name: '4. Trigger', desc: 'Hành động hoặc sự kiện kích hoạt Use Case' },
                      { name: '5. Pre-conditions', desc: 'Điều kiện tiên quyết trước khi bắt đầu' },
                      { name: '6. Post-conditions', desc: 'Trạng thái hệ thống sau khi kết thúc' },
                      { name: '7. Main Flow (Happy Path)', desc: 'Luồng chính suôn sẻ từ đầu đến cuối' },
                      { name: '8. Alternate Flows', desc: 'Luồng rẽ nhánh (VD: Đăng nhập bằng Google)' },
                      { name: '9. Exception Flows', desc: 'Luồng ngoại lệ (VD: Sai mật khẩu, lỗi mạng)' },
                      { name: '10. Business Rules', desc: 'Các quy tắc nghiệp vụ áp dụng trong Use Case' },
                      { name: '11. Non-Functional Requirements', desc: 'Các yêu cầu phi chức năng (Hiệu suất, bảo mật, UI/UX...)' },
                    ].map((item, i) => (
                      <tr key={i} className="hover:bg-slate-50 transition-colors">
                        <td className="p-3 font-bold text-slate-800 border-r border-slate-200">{item.name}</td>
                        <td className="p-3 text-slate-600">{item.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* AC Structure */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <ListChecks className="w-5 h-5 text-emerald-600" />
                Cấu trúc Acceptance Criteria
              </h3>
              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold mb-3">Dạng 1</div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Rule-based (Checklist)</h4>
                  <p className="text-sm text-slate-600 mb-4">Viết theo dạng gạch đầu dòng các quy tắc.</p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm font-mono text-slate-700 shadow-sm">
                    - Hệ thống phải cho phép...<br/>
                    - Hệ thống không được...
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <div className="inline-block px-3 py-1 bg-slate-200 text-slate-700 rounded-full text-xs font-bold mb-3">Dạng 2</div>
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">Scenario-based (BDD)</h4>
                  <p className="text-sm text-slate-600 mb-4">Viết theo cấu trúc Behavior Driven Development.</p>
                  <div className="bg-white p-4 rounded-xl border border-slate-200 text-sm font-mono text-slate-700 shadow-sm space-y-2">
                    <div><span className="font-bold text-blue-600 inline-block w-16">Given</span> (Giả định): Ngữ cảnh ban đầu</div>
                    <div><span className="font-bold text-emerald-600 inline-block w-16">When</span> (Khi): Hành động của user</div>
                    <div><span className="font-bold text-purple-600 inline-block w-16">Then</span> (Thì): Kết quả mong đợi</div>
                    <div><span className="font-bold text-amber-600 inline-block w-16">And</span> (Và): Thêm điều kiện/hành động</div>
                    <div><span className="font-bold text-rose-600 inline-block w-16">But</span> (Nhưng): Điều kiện ngoại lệ/phủ định</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Khi nào thì nên dùng cái nào */}
        <section id="section-4" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <GitCompare className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">4. Khi nào thì nên dùng cái nào?</h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="p-6 font-semibold text-slate-600 w-1/4">Tiêu chí</th>
                    <th className="p-6 font-bold text-blue-700 w-3/8 border-l border-slate-200 text-center">Use Case Specification</th>
                    <th className="p-6 font-bold text-emerald-700 w-3/8 border-l border-slate-200 text-center">Acceptance Criteria</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-800 bg-slate-50/30">Mô hình dự án</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Thường dùng trong <strong>Waterfall</strong>, hoặc các dự án Outsource cần ký tá tài liệu rõ ràng trước khi code.</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Thường dùng trong <strong>Agile/Scrum</strong>, đính kèm trực tiếp vào các User Story trên Jira.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-800 bg-slate-50/30">Độ phức tạp</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Dùng cho các tính năng có <strong>luồng tương tác phức tạp</strong>, nhiều bước, nhiều rẽ nhánh (VD: Thanh toán, duyệt hồ sơ).</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Dùng để xác định <strong>điều kiện nghiệm thu (Pass/Fail)</strong> của một User Story nhỏ. Tập trung liệt kê các ràng buộc, quy tắc xử lý dữ liệu hoặc trạng thái UI thay vì mô tả luồng tương tác dài.</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-800 bg-slate-50/30">Góc nhìn</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Tập trung vào <strong>Hành vi (How)</strong>.</td>
                    <td className="p-6 text-slate-600 border-l border-slate-200">Tập trung vào <strong>Kết quả (What)</strong>.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-indigo-50 p-6 border-t border-slate-200 flex gap-4 items-start">
              <Lightbulb className="w-6 h-6 text-indigo-600 shrink-0" />
              <div>
                <h4 className="font-bold text-indigo-900 mb-1">Thực tế trong Agile</h4>
                <p className="text-indigo-800 text-sm leading-relaxed">
                  Chúng ta hoàn toàn có thể <strong>kết hợp cả hai</strong>. Một User Story có các Acceptance Criteria, và nếu tính năng đó quá phức tạp, BA có thể đính kèm một file Use Case Spec (hoặc vẽ Activity Diagram) vào ticket để Dev dễ hình dung.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Hướng dẫn cách viết cụ thể */}
        <section id="section-5" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <PenTool className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">5. Hướng dẫn cách viết cụ thể</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* UC Tips */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-blue-900 mb-6 flex items-center justify-center gap-2 bg-blue-50 p-4 rounded-xl border border-blue-100">
                <FileText className="w-5 h-5 text-blue-600" />
                Use Case Specification
              </h3>
              
              <div className="space-y-8">
                {/* Phần 1: Lưu ý chung */}
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-4 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 inline-block">1. Những lưu ý chung</h4>
                  <ul className="space-y-6">
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">1</div>
                      <div className="flex-1">
                        <strong className="text-slate-800 block mb-2 text-lg">Dùng câu chủ động</strong>
                        <p className="text-sm text-slate-600 mb-3">Luôn bắt đầu bằng danh từ chỉ Actor hoặc System.</p>
                        <div className="text-sm p-4 bg-slate-100 rounded-xl border border-slate-200 space-y-2">
                          <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"/> <span><strong>Đúng:</strong> Hệ thống hiển thị thông báo lỗi.</span></div>
                          <div className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0"/> <span><strong>Sai:</strong> Thông báo lỗi được hiển thị.</span></div>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">2</div>
                      <div className="flex-1">
                        <strong className="text-slate-800 block mb-2 text-lg">Ping-pong tương tác</strong>
                        <p className="text-sm text-slate-600">Bước 1 Actor làm gì <ArrowRight className="inline w-4 h-4 mx-1"/> Bước 2 System phản hồi ra sao. Cứ thế đập nhả.</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">3</div>
                      <div className="flex-1">
                        <strong className="text-slate-800 block mb-2 text-lg">Không đưa UI vào Use Case</strong>
                        <p className="text-sm text-slate-600 mb-3">Vì UI có thể thay đổi, nhưng hành vi thì không.</p>
                        <div className="text-sm p-4 bg-slate-100 rounded-xl border border-slate-200 space-y-2">
                          <div className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0"/> <span><strong>Nên:</strong> Người dùng chọn chức năng Lưu.</span></div>
                          <div className="flex gap-2 items-start"><XCircle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0"/> <span><strong>Tránh:</strong> Người dùng click vào nút màu xanh góc phải.</span></div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="my-12 relative flex items-center justify-center">
                  <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
                  <div className="relative bg-white px-4 text-blue-400">
                    <PenTool className="w-5 h-5" />
                  </div>
                </div>

                {/* Phần 2: Hướng dẫn từng mục */}
                <div>
                  <h4 className="text-lg font-bold text-blue-900 mb-4 bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 inline-block">2. Hướng dẫn từng mục</h4>
                  <div className="space-y-6">
                    <CollapsibleBlock title="Trigger (Kích hoạt)">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Actor / System / Time] + [Hành động / Sự kiện] + [Mục đích]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Xác định rõ ai hoặc cái gì "đánh thức" hệ thống và để làm gì. Đừng nhầm lẫn Trigger với bước đầu tiên của Main Flow.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">User (Actor) click nút Thanh toán (Hành động) để hoàn tất đơn hàng (Mục đích).</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Pre-conditions (Điều kiện tiên quyết)" subtitle="- State Gatekeeper">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Thực thể] + [Bắt buộc ở Trạng thái X]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Bộ lọc trạng thái trước khi chạy. Check 3 yếu tố: <strong>Quyền</strong> (Đã login? Role Admin?), <strong>Dữ liệu</strong> (Giỏ hàng {'>'} 0?), <strong>Hệ thống</strong> (API đối tác đang up?). Nếu sai, Use Case bị chặn từ vòng gửi xe.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">User phải ở trạng thái 'Active', Giỏ hàng phải có ít nhất 1 sản phẩm.</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Post-conditions (Hậu điều kiện)" subtitle="- State Change & System Effects">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Dữ liệu] + [Thay đổi trạng thái] HOẶC [Hệ thống] + [Kích hoạt tác vụ phụ trợ]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Trạng thái hệ thống được cam kết sau khi luồng kết thúc. Bao gồm 2 nhóm chính: <strong>(1) Dữ liệu</strong> (Tạo mới/Cập nhật/Xóa gì dưới DB?) và <strong>(2) Hệ quả hệ thống</strong> (Có gửi Email/SMS/Push Notification không? Có đồng bộ sang bên thứ 3 không?). <em>Lưu ý: Các thông báo UI tạm thời (Toast/Popup) nên viết ở bước cuối của Main Flow thay vì ghi ở đây.</em></p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">1. Đơn hàng chuyển status thành 'Created', Tồn kho bị trừ 1.<br/>2. Hệ thống gửi Push Notification và Email xác nhận cho User.</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Main Flow (Luồng chính)" subtitle="- Request & Response">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">Bước lẻ (Actor): [Cung cấp Dữ liệu] <ArrowRight className="inline w-3 h-3 mx-1"/> Bước chẵn (System): [Validate] + [Xử lý] + [Phản hồi]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Kịch bản hoàn hảo (Happy Path). Viết theo nguyên tắc đập nhả (Ping-pong). System luôn phải làm 3 việc: Xác thực thông tin đầu vào {'->'} Xử lý logic {'->'} Phản hồi lại trạng thái cho Actor.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">1. User nhập email/pass. 2. System validate format {'->'} check DB {'->'} trả về token & redirect.</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Alternate/Exception Flows" subtitle="- Deviation Matrix">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Tại bước X] + [Nếu xảy ra Y] <ArrowRight className="inline w-3 h-3 mx-1"/> [System làm Z] <ArrowRight className="inline w-3 h-3 mx-1"/> [Quay lại bước N / Kết thúc]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700"><strong>Alternate (Thay thế):</strong> Cùng đích đến nhưng khác cách đi. <strong>Exception (Ngoại lệ):</strong> Lỗi chặn luồng {'->'} Báo lỗi {'->'} Bắt nhập lại hoặc Hủy.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">Tại bước 2, nếu sai OTP {'->'} System báo lỗi {'->'} Yêu cầu nhập lại (Quay lại bước 1).</p>
                      </div>
                    </CollapsibleBlock>
                    
                    <CollapsibleBlock title="Business Rules (Quy tắc nghiệp vụ)" subtitle="- Logic Gate">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">Nếu [Điều kiện X] <ArrowRight className="inline w-3 h-3 mx-1"/> [Hành động / Ràng buộc Y]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy (Framework 5W1H)</span>
                        <div className="text-sm text-slate-700 space-y-3">
                          <p>Thường thì business rule của 1 usecase, chúng ta thường để ý đến quy định chính sách liên quan.</p>
                          <p>Để tư duy tổng quát và đảm bảo tính <strong>MECE</strong> (Không trùng lặp, không bỏ sót), hãy dùng <strong>Framework 5W1H</strong> để "soi" vào tính năng:</p>
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">1</span> WHY (Tại sao? - Rủi ro & Chính sách)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Tại sao cần có quy định chính sách đó? Có rủi ro gì nếu "thả cửa" không?</li>
                                <li><strong>Xét theo:</strong> Luật pháp (Compliance), Chính sách Cty (Policy), Chống gian lận (Security).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Phải KYC (Why - Luật chống rửa tiền) trước khi rút tiền. Khóa tài khoản sau 5 lần nhập sai (Why - Chống brute-force).
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">2</span> WHAT (Cái gì? - Dữ liệu)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Dữ liệu đầu vào/đầu ra phải thỏa mãn điều kiện gì?</li>
                                <li><strong>Xét theo:</strong> Bắt buộc/Tùy chọn, Định dạng (Format), Tính duy nhất (Unique), Độ dài.</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Số điện thoại phải đủ 10 số (Format) và chưa từng được đăng ký (Unique).
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">3</span> WHO (Ai? - Phân quyền)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Ai được phép/không được phép thực hiện?</li>
                                <li><strong>Xét theo:</strong> Vai trò (Role), Hạng (Tier), Trạng thái tài khoản, Quyền sở hữu (Owner).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Chỉ "Chủ cửa hàng" (Role) có gói "Premium" (Tier) mới được xuất báo cáo.
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">4</span> WHEN (Khi nào? - Trạng thái)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Khi nào hành động này hợp lệ/hết hạn?</li>
                                <li><strong>Xét theo:</strong> Trạng thái (State Machine), Vòng đời (Lifecycle), Khung giờ (Timeframe).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Chỉ được hủy đơn khi đang "Chờ xác nhận" (State). Mã OTP sống 5 phút (Lifecycle).
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">5</span> WHERE (Ở đâu? - Phạm vi)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Tính năng/hành động này có bị giới hạn ở phạm vi cụ thể nào không?</li>
                                <li><strong>Xét theo:</strong> Nền tảng (App/Web), Vùng địa lý (Geo), Kênh thanh toán, Màn hình.</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Freeship chỉ áp dụng cho khu vực "Hà Nội" (Geo) và thanh toán qua "Momo" (Channel).
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">6</span> HOW (Thế nào? - Tính toán)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Hệ thống xử lý logic này ra sao? Giới hạn là bao nhiêu?</li>
                                <li><strong>Xét theo:</strong> Công thức tính (How to calculate), Hạn mức/Quota (How much/many), Thời gian (How long).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Phí ship = 15k/km đầu + 5k/km tiếp (How to). Rút tối đa 50tr/ngày (How much).
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">User chỉ được rút tối đa 20 triệu/ngày. Mật khẩu phải có ít nhất 8 ký tự, chứa số và chữ hoa.</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Non-functional Requirements" subtitle="- Quality Attributes">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Thuộc tính chất lượng] + [Chỉ số đo lường (Metrics)]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy (Framework S.U.P.E.R)</span>
                        <div className="text-sm text-slate-700 space-y-3">
                          <p>Không mô tả hệ thống "làm gì", mà mô tả hệ thống làm điều đó "tốt như thế nào". Để không bỏ sót các yêu cầu phi chức năng của 1 usecase, hãy dùng <strong>Framework S.U.P.E.R</strong> (Siêu việt):</p>
                          <div className="grid grid-cols-1 gap-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">S</span> Security & Compliance (Bảo mật & Tuân thủ)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Dữ liệu được bảo vệ thế nào? Có cần tuân thủ luật pháp/tiêu chuẩn nào không?</li>
                                <li><strong>Metrics:</strong> Encryption (Mã hóa), Phân quyền, Audit Log, GDPR/PDPA, PCI-DSS.</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Mật khẩu mã hóa bcrypt. Phải có checkbox đồng ý điều khoản (GDPR).
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">U</span> Usability (Tính khả dụng & UX)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Trải nghiệm người dùng có dễ dàng không? Có hỗ trợ đa thiết bị không?</li>
                                <li><strong>Metrics:</strong> Số click tối đa, Thời gian học cách dùng, Accessibility (WCAG), Responsive.</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Hoàn thành thanh toán không quá 3 clicks. Giao diện hiển thị tốt trên Mobile.
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">P</span> Performance (Hiệu năng)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Hệ thống phản hồi nhanh cỡ nào?</li>
                                <li><strong>Metrics:</strong> Response time, Latency, Resource usage (RAM/CPU).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: API search trả kết quả dưới 200ms. Thời gian load trang {'<'} 2s.
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">E</span> Elasticity (Khả năng co giãn & Chịu tải)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Hệ thống chịu được bao nhiêu người dùng cùng lúc? Có mở rộng được không?</li>
                                <li><strong>Metrics:</strong> CCU (Concurrent Users), Throughput (TPS - Transactions Per Second).</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Chịu tải 10,000 CCU trong giờ cao điểm flash sale mà không sập.
                              </div>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                              <strong className="text-emerald-800 block mb-2 text-base border-b border-emerald-100 pb-2 flex items-center gap-2">
                                <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs">R</span> Reliability (Độ tin cậy & Ổn định)
                              </strong>
                              <ul className="text-sm text-slate-700 space-y-1 mb-3 list-disc pl-4">
                                <li>Hệ thống có ổn định không? Nếu lỗi thì phục hồi thế nào?</li>
                                <li><strong>Metrics:</strong> Uptime (99.99%), Fault tolerance (Chịu lỗi), Data backup.</li>
                              </ul>
                              <div className="text-sm text-slate-600 italic bg-slate-50 p-2 rounded border border-slate-100">
                                VD: Uptime 99.99%. Nếu API đối tác lỗi, hệ thống tự động retry hoặc hiện thông báo bảo trì.
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">API response time {'<'} 200ms (Performance). Hệ thống chịu tải 10,000 CCU (Scalability). Data user phải được mã hóa AES-256 (Security).</p>
                      </div>
                    </CollapsibleBlock>
                  </div>
                </div>
              </div>
            </div>

            {/* AC Tips */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-emerald-900 mb-6 flex items-center justify-center gap-2 bg-emerald-50 p-4 rounded-xl border border-emerald-100">
                <ListChecks className="w-5 h-5 text-emerald-600" />
                Hướng dẫn viết Acceptance Criteria (AC)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">1</span> 
                    Scenario-based (BDD - Given/When/Then)
                  </h4>
                  <p className="text-sm text-slate-600 mb-4">Viết theo cấu trúc Behavior Driven Development. Tập trung vào hành vi người dùng, không mô tả kỹ thuật.</p>
                  
                  <div className="space-y-4 pl-4 border-l-2 border-slate-100 ml-2">
                    <CollapsibleBlock title="Given (Giả định)" subtitle="- Ngữ cảnh ban đầu">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[User/Hệ thống] + đang ở [Trạng thái/Màn hình] + với [Điều kiện dữ liệu]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Mô tả trạng thái của hệ thống <strong>trước khi</strong> user thực hiện hành động. Đây là tiền đề để kịch bản xảy ra. Không chứa hành động click/nhập liệu ở bước này.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">Given User đang ở màn hình Giỏ hàng và có 2 sản phẩm hợp lệ.</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="When (Khi)" subtitle="- Hành động kích hoạt">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[User] + [Thực hiện hành động] + [Dữ liệu đầu vào (nếu có)]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Mô tả <strong>hành động chính</strong> yếu kích hoạt kịch bản này. Thường là thao tác của user (click, nhập, chọn) hoặc một event của hệ thống (đến giờ X).</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">When User click nút "Thanh toán".</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="Then (Thì)" subtitle="- Kết quả mong đợi">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Hệ thống] + [Phản hồi/Thay đổi trạng thái] + [Hiển thị UI]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Mô tả những gì hệ thống phải làm để đáp lại hành động ở bước When. Phải là kết quả có thể quan sát/kiểm chứng được (Testable).</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">Then Hệ thống chuyển sang màn hình "Chọn phương thức thanh toán".</p>
                      </div>
                    </CollapsibleBlock>

                    <CollapsibleBlock title="And / But (Và / Nhưng)" subtitle="- Điều kiện bổ sung">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">And/But + [Mệnh đề tương tự Given/When/Then]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Dùng để nối các điều kiện cùng loại, giúp câu văn tự nhiên hơn thay vì lặp lại Given/When/Then nhiều lần. <strong>And</strong> dùng cho ý bổ sung, <strong>But</strong> dùng cho ý phủ định/ngoại lệ.</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <p className="text-sm text-slate-600 italic">And Hệ thống gửi email xác nhận đơn hàng.<br/>But Không trừ tiền trong ví của User.</p>
                      </div>
                    </CollapsibleBlock>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded text-sm">2</span> 
                    Rule-oriented (Dạng Checklist)
                  </h4>
                  <div className="space-y-4 pl-4 border-l-2 border-slate-100 ml-2">
                    <CollapsibleBlock title="Checklist Rules" subtitle="- Ràng buộc đơn giản">
                      <div>
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Công thức</span>
                        <p className="text-sm font-mono text-indigo-700 bg-indigo-50/50 p-2 rounded-lg border border-indigo-100">[Điều kiện/Trạng thái] {'->'} [Hành vi hệ thống/Ràng buộc]</p>
                      </div>
                      <div>
                        <span className="inline-block bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Tư duy</span>
                        <p className="text-sm text-slate-700">Dùng cho các logic đơn giản, UI/UX rules, hoặc các ràng buộc nhanh không cần mô tả ngữ cảnh phức tạp. Phải đảm bảo tính Testable (đo lường/xác nhận được).</p>
                      </div>
                      <div>
                        <span className="inline-block bg-amber-100 text-amber-700 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-2">Ví dụ</span>
                        <ul className="text-sm text-slate-600 italic space-y-2 list-disc pl-5">
                          <li>Nút "Thanh toán" bị mờ (disabled) nếu chưa chọn phương thức thanh toán.</li>
                          <li>Mật khẩu phải được che (mask) bằng dấu * khi nhập.</li>
                          <li>Hiển thị thông báo lỗi màu đỏ "Vui lòng nhập email" dưới ô input nếu bỏ trống.</li>
                        </ul>
                      </div>
                    </CollapsibleBlock>
                  </div>
                </div>

                {/* Nguyên tắc 3 KHÔNG */}
                <div className="mt-8">
                  <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded text-sm">!</span> 
                    Nguyên tắc 3 KHÔNG khi viết AC
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex-shrink-0 mt-0.5"><XCircle className="w-5 h-5 text-rose-500" /></div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Không mơ hồ (Phải Testable)</strong>
                        <p className="text-sm text-slate-600 mb-2">Tránh các tính từ cảm tính như "tốt", "đẹp", "nhanh". Mọi thứ phải đo lường được.</p>
                        <div className="text-sm bg-slate-50 p-2 rounded border border-slate-100 flex flex-col gap-1">
                          <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> <strong>Đúng:</strong> Thời gian load trang không quá 2 giây.</span>
                          <span className="text-rose-600 flex items-center gap-1"><XCircle className="w-3 h-3"/> <strong>Sai:</strong> Hệ thống chạy nhanh.</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex-shrink-0 mt-0.5"><XCircle className="w-5 h-5 text-rose-500" /></div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Không nói về "How" (Kỹ thuật)</strong>
                        <p className="text-sm text-slate-600 mb-2">AC là góc nhìn của User/Business, không phải của Dev. Đừng mô tả cách code.</p>
                        <div className="text-sm bg-slate-50 p-2 rounded border border-slate-100 flex flex-col gap-1">
                          <span className="text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-3 h-3"/> <strong>Đúng:</strong> User có thể tìm kiếm sản phẩm theo tên.</span>
                          <span className="text-rose-600 flex items-center gap-1"><XCircle className="w-3 h-3"/> <strong>Sai:</strong> Hệ thống dùng Elasticsearch để query bảng Product.</span>
                        </div>
                      </div>
                    </li>
                    <li className="flex gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                      <div className="flex-shrink-0 mt-0.5"><XCircle className="w-5 h-5 text-rose-500" /></div>
                      <div>
                        <strong className="text-slate-800 block mb-1">Không bỏ sót Negative Case</strong>
                        <p className="text-sm text-slate-600">Đừng chỉ viết AC cho "Happy Path". Hãy viết AC cho cả trường hợp nhập sai, bỏ trống trường bắt buộc, lỗi server, rớt mạng.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Ví dụ thực tế */}
        <section id="section-6" className="scroll-mt-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">6. Ví dụ thực tế</h2>
          </div>

          <div className="space-y-8">
            {/* Use Case Specification Table */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-slate-800 text-white p-6 text-center">
                <p className="text-slate-300 text-sm uppercase tracking-wider font-semibold mb-1">Ví dụ 1</p>
                <h3 className="text-2xl font-bold">Use Case Specification</h3>
              </div>

              <div className="p-0 overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">1. Use Case Name</th>
                      <td className="p-4 text-slate-700 font-semibold text-lg">UC01 - Đăng nhập hệ thống (System Login)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">2. Description</th>
                      <td className="p-4 text-slate-700">Cho phép người dùng (Khách hàng, Quản trị viên) đã có tài khoản hợp lệ xác thực danh tính để truy cập vào các tính năng được phân quyền trên hệ thống.</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">3. Actor</th>
                      <td className="p-4 text-slate-700">Người dùng chưa đăng nhập (Guest)</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">4. Trigger</th>
                      <td className="p-4 text-slate-700">Người dùng truy cập vào đường dẫn <code className="bg-slate-100 px-1 py-0.5 rounded text-sm text-pink-600">/login</code> hoặc click vào nút "Đăng nhập" trên giao diện trang chủ.</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">5. Pre-conditions</th>
                      <td className="p-4 text-slate-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Người dùng chưa đăng nhập vào hệ thống.</li>
                          <li>Người dùng đã có tài khoản hợp lệ và đang ở trạng thái Hoạt động (Active).</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-slate-50 font-bold text-slate-700 align-top border-r border-slate-200">6. Post-conditions</th>
                      <td className="p-4 text-slate-700">
                        <ul className="list-disc list-inside space-y-1">
                          <li>Hệ thống tạo phiên làm việc (Session/JWT Token) cho người dùng.</li>
                          <li>Trạng thái người dùng chuyển sang "Đã đăng nhập".</li>
                          <li>Người dùng được chuyển hướng đến trang Dashboard tương ứng với phân quyền.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-blue-50 font-bold text-blue-900 align-top border-r border-slate-200">7. Main Flow (Happy Path)</th>
                      <td className="p-4 text-slate-700">
                        <ol className="list-decimal list-inside space-y-2">
                          <li>Người dùng nhập thông tin vào trường <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">Email</code> và <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">Mật khẩu</code>.</li>
                          <li>Người dùng click nút "Đăng nhập".</li>
                          <li>Hệ thống kiểm tra tính hợp lệ của dữ liệu đầu vào (Validation form).</li>
                          <li>Hệ thống gửi yêu cầu xác thực thông tin (Email và Mật khẩu đã mã hóa) xuống cơ sở dữ liệu.</li>
                          <li>Hệ thống xác nhận thông tin trùng khớp và tài khoản không bị khóa.</li>
                          <li>Hệ thống khởi tạo phiên làm việc (Session) cho người dùng.</li>
                          <li>Hệ thống chuyển hướng người dùng đến trang <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">Dashboard</code> và hiển thị thông báo "Đăng nhập thành công".</li>
                        </ol>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-emerald-50 font-bold text-emerald-900 align-top border-r border-slate-200">8. Alternate Flows</th>
                      <td className="p-4 text-slate-700">
                        <ul className="space-y-4">
                          <li className="flex gap-2">
                            <span className="font-bold text-emerald-600 shrink-0">1a.</span>
                            <div>
                              <strong>Đăng nhập bằng SSO (Google/Facebook):</strong><br/>
                              1. Tại bước 1 của luồng chính, người dùng chọn "Đăng nhập bằng Google".<br/>
                              2. Hệ thống chuyển hướng sang trang xác thực của Google.<br/>
                              3. Người dùng xác thực thành công, Google trả về token.<br/>
                              4. Hệ thống kiểm tra email từ token, tự động đăng nhập và tiếp tục từ bước 6 của luồng chính.
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-rose-50 font-bold text-rose-900 align-top border-r border-slate-200">9. Exception Flows</th>
                      <td className="p-4 text-slate-700">
                        <ul className="space-y-4">
                          <li className="flex gap-2">
                            <span className="font-bold text-rose-600 shrink-0">3a.</span>
                            <div>
                              <strong>Dữ liệu không hợp lệ (Validation Error):</strong> Tại bước 3, nếu Email sai định dạng hoặc Mật khẩu để trống, hệ thống hiển thị lỗi text màu đỏ dưới trường tương ứng (VD: "Email không đúng định dạng"). Người dùng ở lại trang hiện tại.
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-bold text-rose-600 shrink-0">5a.</span>
                            <div>
                              <strong>Sai thông tin đăng nhập:</strong> Tại bước 5, nếu Email không tồn tại hoặc Mật khẩu không khớp, hệ thống hiển thị Toast message "Email hoặc mật khẩu không chính xác". Tăng biến đếm số lần nhập sai lên 1.
                            </div>
                          </li>
                          <li className="flex gap-2">
                            <span className="font-bold text-rose-600 shrink-0">5b.</span>
                            <div>
                              <strong>Tài khoản bị khóa:</strong> Tại bước 5, nếu trạng thái tài khoản là "Locked", hệ thống chặn đăng nhập và hiển thị thông báo "Tài khoản của bạn đã bị khóa do nhập sai mật khẩu nhiều lần. Vui lòng thử lại sau 30 phút."
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-amber-50 font-bold text-amber-900 align-top border-r border-slate-200">10. Business Rules</th>
                      <td className="p-4 text-slate-700">
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>BR-01 (Khóa bảo vệ):</strong> Hệ thống tự động khóa tài khoản tạm thời (30 phút) nếu người dùng nhập sai mật khẩu liên tiếp 5 lần.</li>
                          <li><strong>BR-02 (Định dạng Email):</strong> Email phải tuân thủ chuẩn RFC 5322 (vd: user@domain.com).</li>
                          <li><strong>BR-03 (Session Timeout):</strong> Phiên đăng nhập sẽ tự động hết hạn sau 24 giờ nếu người dùng không có bất kỳ tương tác nào với hệ thống.</li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <th className="w-1/4 p-4 bg-purple-50 font-bold text-purple-900 align-top border-r border-slate-200">11. Non-Functional Requirements</th>
                      <td className="p-4 text-slate-700">
                        <ul className="list-disc list-inside space-y-2">
                          <li><strong>Performance:</strong> Thời gian phản hồi của API đăng nhập (P95) không được vượt quá 500ms.</li>
                          <li><strong>Security:</strong> Mật khẩu truyền qua mạng phải được mã hóa TLS/SSL. Mật khẩu lưu trong DB phải được băm (hash) bằng thuật toán bcrypt. Hệ thống phải có cơ chế Rate Limiting để chống Brute-force attack.</li>
                          <li><strong>Usability:</strong> Giao diện phải responsive trên các thiết bị di động (màn hình 320px trở lên). Hỗ trợ submit form bằng phím <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">Enter</code>.</li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Acceptance Criteria Table/Section */}
            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-emerald-800 text-white p-6 text-center">
                <p className="text-emerald-200 text-sm uppercase tracking-wider font-semibold mb-1">Ví dụ 2</p>
                <h3 className="text-2xl font-bold">Acceptance Criteria (AC)</h3>
              </div>
              
              <div className="p-8 space-y-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm text-slate-700">
                  <strong className="block mb-1 text-slate-900">User Story:</strong> 
                  <span className="italic">"Là một người dùng đã đăng ký, tôi muốn xác thực danh tính của mình để có thể truy cập và sử dụng các tính năng cá nhân hóa một cách an toàn."</span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-4 text-lg border-b border-slate-100 pb-2">1. Scenario-based (BDD)</h4>
                  <div className="space-y-6">
                    {/* Scenario 1 */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm font-mono text-sm">
                      <div className="font-bold text-slate-800 mb-4 font-sans text-base border-b border-slate-100 pb-2">Scenario 1: Đăng nhập thành công (Happy path)</div>
                      <div className="space-y-2">
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">Given</span><span className="text-slate-700">Người dùng đang ở trang Đăng nhập</span></div>
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Tài khoản "user@example.com" tồn tại và đang ở trạng thái "Active"</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">When</span><span className="text-slate-700">Người dùng nhập Email là "user@example.com" và Mật khẩu đúng</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Người dùng click nút "Đăng nhập"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">Then</span><span className="text-slate-700">Hệ thống xác thực thành công và tạo Session mới</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Hệ thống hiển thị Toast message thành công: "Đăng nhập thành công"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Hệ thống chuyển hướng người dùng đến trang "/dashboard"</span></div>
                      </div>
                    </div>

                    {/* Scenario 2 */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm font-mono text-sm">
                      <div className="font-bold text-slate-800 mb-4 font-sans text-base border-b border-slate-100 pb-2">Scenario 2: Đăng nhập thất bại do sai thông tin (Exception)</div>
                      <div className="space-y-2">
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">Given</span><span className="text-slate-700">Người dùng đang ở trang Đăng nhập</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">When</span><span className="text-slate-700">Người dùng nhập Email hoặc Mật khẩu không khớp với cơ sở dữ liệu</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Người dùng click nút "Đăng nhập"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">Then</span><span className="text-slate-700">Hệ thống hiển thị Toast message lỗi: "Email hoặc mật khẩu không chính xác"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Hệ thống ghi nhận tăng 1 lần đăng nhập thất bại (Failed attempt) cho email này</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Người dùng vẫn giữ nguyên ở trang Đăng nhập, form không bị clear data</span></div>
                      </div>
                    </div>

                    {/* Scenario 3 */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm font-mono text-sm">
                      <div className="font-bold text-slate-800 mb-4 font-sans text-base border-b border-slate-100 pb-2">Scenario 3: Khóa tài khoản do nhập sai quá số lần quy định (BR-01)</div>
                      <div className="space-y-2">
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">Given</span><span className="text-slate-700">Người dùng đang ở trang Đăng nhập</span></div>
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Tài khoản "user@example.com" đã có 4 lần đăng nhập thất bại trước đó</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">When</span><span className="text-slate-700">Người dùng nhập sai Mật khẩu lần thứ 5</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Người dùng click nút "Đăng nhập"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">Then</span><span className="text-slate-700">Hệ thống cập nhật trạng thái tài khoản thành "Locked"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Hệ thống hiển thị Toast message lỗi: "Tài khoản của bạn đã bị khóa do nhập sai mật khẩu nhiều lần. Vui lòng thử lại sau 30 phút."</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Hệ thống gửi Email cảnh báo bảo mật đến "user@example.com"</span></div>
                      </div>
                    </div>

                    {/* Scenario Outline */}
                    <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm font-mono text-sm">
                      <div className="font-bold text-slate-800 mb-4 font-sans text-base border-b border-slate-100 pb-2">Scenario Outline: Kiểm tra tính hợp lệ của Form Đăng nhập (Validation - BR-02)</div>
                      <div className="space-y-2 mb-6">
                        <div className="flex gap-4"><span className="text-blue-600 font-bold w-16 shrink-0">Given</span><span className="text-slate-700">Người dùng đang ở trang Đăng nhập</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">When</span><span className="text-slate-700">Người dùng nhập &lt;Email&gt; và &lt;Password&gt;</span></div>
                        <div className="flex gap-4"><span className="text-emerald-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Người dùng click ra ngoài ô input (Blur) hoặc click nút "Đăng nhập"</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">Then</span><span className="text-slate-700">Hệ thống hiển thị &lt;Error_Message&gt; màu đỏ ngay dưới trường tương ứng</span></div>
                        <div className="flex gap-4"><span className="text-purple-600 font-bold w-16 shrink-0">And</span><span className="text-slate-700">Nút "Đăng nhập" bị vô hiệu hóa (Disabled)</span></div>
                      </div>
                      
                      <div className="font-bold text-slate-800 mb-2 font-sans">Examples:</div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-100">
                              <th className="border border-slate-300 p-2 text-slate-700">Email</th>
                              <th className="border border-slate-300 p-2 text-slate-700">Password</th>
                              <th className="border border-slate-300 p-2 text-slate-700">Error_Message</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-slate-300 p-2 text-slate-600 italic">[Bỏ trống]</td>
                              <td className="border border-slate-300 p-2 text-slate-600">ValidPass123!</td>
                              <td className="border border-slate-300 p-2 text-rose-600">"Vui lòng nhập Email"</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 p-2 text-slate-600">user_at_domain.com</td>
                              <td className="border border-slate-300 p-2 text-slate-600">ValidPass123!</td>
                              <td className="border border-slate-300 p-2 text-rose-600">"Email không đúng định dạng"</td>
                            </tr>
                            <tr>
                              <td className="border border-slate-300 p-2 text-slate-600">user@example.com</td>
                              <td className="border border-slate-300 p-2 text-slate-600 italic">[Bỏ trống]</td>
                              <td className="border border-slate-300 p-2 text-rose-600">"Vui lòng nhập Mật khẩu"</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-4 text-lg border-b border-slate-100 pb-2">2. Rule-oriented (UI/UX & Technical Checklist)</h4>
                  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <ul className="list-disc list-inside space-y-3 text-slate-700 text-sm leading-relaxed">
                      <li><strong>Trường Email:</strong> Bắt buộc nhập. Validate định dạng email theo chuẩn RFC 5322. Hỗ trợ thuộc tính <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600">autocomplete="email"</code>. Tự động trim khoảng trắng ở đầu và cuối chuỗi khi submit.</li>
                      <li><strong>Trường Mật khẩu:</strong> Bắt buộc nhập. Mặc định hiển thị dạng dấu <code className="bg-slate-100 px-1 py-0.5 rounded">*</code> hoặc <code className="bg-slate-100 px-1 py-0.5 rounded">•</code>. Có icon toggle (mắt) ở góc phải để ẩn/hiện mật khẩu. Chặn copy (Ctrl+C) từ trường mật khẩu. Hỗ trợ <code className="bg-slate-100 px-1 py-0.5 rounded text-pink-600">autocomplete="current-password"</code>.</li>
                      <li><strong>Nút "Đăng nhập":</strong> 
                        <ul className="list-[circle] list-inside ml-6 mt-1 space-y-1 text-slate-600">
                          <li>Trạng thái <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-500">Disabled</code>: Khi form chưa được điền đầy đủ hoặc đang có lỗi validation.</li>
                          <li>Trạng thái <code className="bg-slate-100 px-1 py-0.5 rounded text-blue-600">Active</code>: Khi form hợp lệ, sẵn sàng submit.</li>
                          <li>Trạng thái <code className="bg-slate-100 px-1 py-0.5 rounded text-amber-600">Loading</code>: Khi user click submit và đang chờ API phản hồi (hiển thị spinner, text đổi thành "Đang xử lý...", nút bị disabled để chống double-click).</li>
                        </ul>
                      </li>
                      <li><strong>Bàn phím & Accessibility:</strong> Hỗ trợ submit form bằng cách nhấn phím <code className="bg-slate-100 px-1 py-0.5 rounded font-bold">Enter</code> khi đang focus ở bất kỳ ô input nào. Đảm bảo thứ tự Tab (Tabindex) di chuyển logic từ Email -&gt; Password -&gt; Nút Đăng nhập.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
