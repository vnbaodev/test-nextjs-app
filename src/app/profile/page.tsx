'use client'
import { useRouter } from "next/navigation"
const MyInf = () => {
    const router = useRouter()

    const handleBtn = () => {
        router.push("/")
    }
    return (
        <div>
            <div style={{ margin: '40px 0 60px 590px' }}>
                <li>
                    名前：長野上田
                </li>
                <li>
                    性別：男性
                </li>
                <li>
                    国籍：日本
                </li>
                <li>
                    学校：エビ学園
                </li>
                <li>
                    専門：感性工学コース
                </li>
                <li>
                    年齢：二十歳
                </li>
                <li>
                    趣味：サッカー、バドミントン
                </li>
                <li>
                    プログラミングの経験：なし
                </li>
                <li>
                    研究の内容：繊維を分析するための機械学習
                </li>

            </div>

            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                <button onClick={() => handleBtn()}>Back Home</button>
            </div>
        </div>
    )
}

export default MyInf;