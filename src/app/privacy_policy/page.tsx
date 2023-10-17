'use client';
import React from 'react';
import Aside from '../components/Aside';

export default function TermOfService() {
	return (
		<div>
			<main className="flex bg-slate-100 relative">
				<Aside />
				<section className="flex-grow">
					<header>
						<div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-20">
							<div className="flex items-center justify-center">
								<h1 className="text-3xl font-semibold tracking-tight text-slate-700">
									プライバシーポリシー
								</h1>
							</div>
						</div>
					</header>
					<div className="shadow-md px-6 py-4 mx-20 rounded-lg bg-white mb-8">
						<div>
							<h1 className="text-xl font-bold mb-2">お客様から取得する情報</h1>
							<h2>当社は、お客様から以下の情報を取得します。</h2>
							<ul>
								<li>• 氏名(ニックネームやペンネームも含む)</li>
								<li>• メールアドレス</li>
								<li>• 写真や動画</li>
								<li>
									•
									外部サービスでお客様が利用するID、その他外部サービスのプライバシー設定によりお客様が連携先に開示を認めた情報
								</li>
								<li>• Cookie(クッキー)を用いて生成された識別情報</li>
								<li>
									•
									OSが生成するID、端末の種類、端末識別子等のお客様が利用するOSや端末に関する情報
								</li>
								<li>
									•
									当社ウェブサイトの滞在時間、入力履歴、購買履歴等の当社ウェブサイトにおけるお客様の行動履歴
								</li>
								<li>
									•
									当社アプリの起動時間、入力履歴、購買履歴等の当社アプリの利用履歴
								</li>
							</ul>
							<h1 className="text-xl font-bold mb-2 mt-2">
								お客様の情報を利用する目的
							</h1>
							<p>
								当社は、お客様から取得した情報を、以下の目的のために利用します。
							</p>
							<ol>
								<li>
									• 当社サービスに関する登録の受付、お客様の本人確認、認証のため
								</li>
								<li>• お客様の当社サービスの利用履歴を管理するため</li>
								<li>• 利用料金の決済のため</li>
								<li>
									•
									当社サービスにおけるお客様の行動履歴を分析し、当社サービスの維持改善に役立てるため
								</li>
								<li>• 当社のサービスに関するご案内をするため</li>
								<li>• お客様からのお問い合わせに対応するため</li>
								<li>• 当社の規約や法令に違反する行為に対応するため</li>
								<li>
									• 当社サービスの変更、提供中止、終了、契約解除をご連絡するため
								</li>
								<li>• 当社規約の変更等を通知するため</li>
								<li>
									• 以上の他、当社サービスの提供、維持、保護及び改善のため
								</li>
							</ol>
							<h1 className="text-xl font-bold mb-2 mt-2">
								安全管理のために講じた措置
							</h1>
							<p>
								当社が、お客様から取得した情報に関して安全管理のために講じた措置につきましては、末尾記載のお問い合わせ先にご連絡をいただきましたら、法令の定めに従い個別にご回答させていただきます。
								第三者提供
								当社は、お客様から取得する情報のうち、個人データ（個人情報保護法第１６条第３項）に該当するものついては、あらかじめお客様の同意を得ずに、第三者（日本国外にある者を含みます。）に提供しません。
								但し、次の場合は除きます。
							</p>
							<ol>
								<li>• 個人データの取扱いを外部に委託する場合</li>
								<li>• 当社や当社サービスが買収された場合</li>
								<li>
									•
									事業パートナーと共同利用する場合（具体的な共同利用がある場合は、その内容を別途公表します。)
								</li>
								<li>
									• その他、法律によって合法的に第三者提供が許されている場合
								</li>
							</ol>

							<h1 className="text-xl font-bold mb-2 mt-2">
								プライバシーポリシーの変更
							</h1>
							<p>
								当社は、必要に応じて、このプライバシーポリシーの内容を変更します。この場合、変更後のプライバシーポリシーの施行時期と内容を適切な方法により周知または通知します。
							</p>

							<h1 className="text-xl font-bold mb-2 mt-2">お問い合わせ</h1>
							<p>
								この場合、必ず、運転免許証のご提示等当社が指定する方法により、ご本人からのご請求であることの確認をさせていただきます。なお、情報の開示請求については、開示の有無に関わらず、ご申請時に一件あたり1,000円の事務手数料を申し受けます。
							</p>

							<h2 className="text-md mb-2 mt-2">事業者の氏名 作間圭輔</h2>
							<h2 className="text-md mb-2 mt-2">2023年10月17日 制定</h2>
						</div>
					</div>
				</section>
			</main>
		</div>
	);
}
