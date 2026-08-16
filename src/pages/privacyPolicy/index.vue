<!--
 * @Author: XHL
 * @Date: 2026-06-15
 * @Description: 隐私协议
-->
<template>
    <view class="page">
        <view class="doc-title">权益平台隐私保护协议</view>
        <view class="doc-content">
            <view class="meta-item">
                <text class="label">版本号：</text>V1.0
            </view>
            <view class="meta-item">
                <text class="label">制定日期：</text>2026年6月3日
            </view>
            <view class="meta-item">
                <text class="label">生效日期：</text>2026年6月10日
            </view>
            <view class="meta-item label">尊敬的用户：</view>

            <view
                class="paragraph"
            >“新锐权益宝”（以下简称“本平台”或“我们”）深知个人信息对您的重要性，我们秉承“合法、正当、必要、诚信”的原则，采取严格的安全措施保护您的个人信息。本协议旨在向您清晰、详尽地说明我们如何收集、使用、存储、共享、转让及保护您的个人信息，以及您如何管理您的个人信息。</view>

            <view class="paragraph">请您在点击“同意”或使用我们的服务前，务必审慎阅读并充分理解本协议的全部条款。特别是以加粗、下划线或标红等方式提示您注意的条款。如您对本协议有任何疑问，可通过本协议末尾的联系方式与我们联系。</view>

            <view class="paragraph">您主动点击“同意”或通过“勾选同意”的方式确认本协议，即表示您已完全理解并同意本协议的全部内容，并授权我们按照本协议处理您的个人信息。如您不同意本协议的任何内容，请您立即停止使用本平台的服务。</view>

            <view class="section-title">一、定义</view>

            <view class="paragraph list-item">个人信息：指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</view>
            <view
                class="paragraph list-item"
            >敏感个人信息：指一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括但不限于生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息。在本平台服务中，您提供的身份证号码及银行卡号属于敏感个人信息。</view>
            <view class="paragraph list-item">权益平台服务：指由我们运营的，提供权益产品展示、订购、支付、兑换、管理等功能的小程序及关联H5页面。</view>
            <view class="paragraph list-item">关联公司：指控制、受控于本平台运营方或与本平台运营方共同受控制的其他实体。</view>

            <view class="section-title">二、我们收集和使用您个人信息的场景</view>

            <view class="sub-section-title">（一）核心业务功能</view>

            <view class="paragraph">若您不提供下述信息，您将无法使用本平台的核心服务。</view>

            <view v-for="(item, index) in coreScenarios" :key="'core-' + index" class="table-card">
                <view class="table-row">
                    <view class="table-label">业务场景</view>
                    <view class="table-value">{{ item.function }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">收集的信息类型</view>
                    <view class="table-value">{{ item.types }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">收集目的</view>
                    <view class="table-value">{{ item.purpose }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">法律依据</view>
                    <view class="table-value">{{ item.basis }}</view>
                </view>
            </view>

            <view class="sub-section-title">（二）附加业务功能</view>

            <view class="paragraph">为提高服务质量，我们可能收集以下信息，您可以选择不授权，不影响您使用核心功能。</view>

            <view v-for="(item, index) in extraScenarios" :key="'extra-' + index" class="table-card">
                <view class="table-row">
                    <view class="table-label">业务场景</view>
                    <view class="table-value">{{ item.function }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">收集的信息类型</view>
                    <view class="table-value">{{ item.types }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">收集目的</view>
                    <view class="table-value">{{ item.purpose }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">法律依据</view>
                    <view class="table-value">{{ item.basis }}</view>
                </view>
            </view>

            <view class="section-title">三、我们如何使用Cookie和同类技术</view>

            <view class="paragraph">为确保小程序正常运转，我们会在您的设备上存储名为Cookie的小数据文件。我们不会将Cookie用于本协议所述目的之外的任何用途。您可根据偏好管理或删除Cookie。</view>

            <view class="section-title">四、我们如何共享、转让、公开披露您的个人信息</view>

            <view class="sub-section-title">（一）共享</view>

            <view class="paragraph">我们不会与任何公司、组织、个人共享您的个人信息，但以下情况除外：</view>
            <view class="paragraph list-item">与支付合作方共享（银联及银行）：为实现包月订购、身份验证及每月自动扣费，我们必须将您的姓名、身份证号、银行卡号、手机号共享给中国银联及您选定的发卡银行。其将作为独立的个人信息处理者，遵循其自身的隐私政策处理您的信息。</view>
            <view class="paragraph list-item">与第三方权益供应商共享：为实现具体权益兑换，我们须将您提供的接收账号（手机号）共享给对应的第三方权益提供商（如腾讯、爱奇艺等）。</view>
            <view class="paragraph list-item">与我们的关联公司共享：为便于服务协同，我们可能会在关联公司内部共享必要的订单信息。关联公司受本协议的约束。</view>
            <view class="paragraph list-item">法律法规或政府要求：根据法律规定、司法机关或行政机关的强制性要求（如传票、搜查令等），我们必须共享您的信息。</view>

            <view class="sub-section-title">（二）转让</view>

            <view class="paragraph">我们不会将您的个人信息转让给任何公司、组织或个人，但在涉及本平台运营方合并、分立、收购或资产转让时，如涉及个人信息转让，我们会要求新的持有者继续受本协议的约束，否则我们将要求其重新获取您的授权同意。</view>

            <view class="sub-section-title">（三）公开披露</view>

            <view class="paragraph">我们不会公开披露您的个人信息，除非获得您的单独同意或为应对突发公共卫生事件等紧急情况。</view>

            <view class="sub-section-title">（四）第三方SDK</view>

            <view class="paragraph">本平台小程序内嵌了必要的第三方SDK（软件开发工具包），详见下表：</view>

            <view v-for="(item, index) in sdkList" :key="'sdk-' + index" class="table-card">
                <view class="table-row">
                    <view class="table-label">SDK名称</view>
                    <view class="table-value">{{ item.name }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">所属机构</view>
                    <view class="table-value">{{ item.org }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">收集的信息</view>
                    <view class="table-value">{{ item.info }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">使用目的</view>
                    <view class="table-value">{{ item.purpose }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">隐私政策链接</view>
                    <view class="table-value">{{ item.link }}</view>
                </view>
            </view>

            <view class="section-title">五、我们如何存储和保护您的个人信息</view>

            <view class="paragraph list-item">存储地点：您的个人信息将存储于中华人民共和国境内的服务器。如涉及跨境传输，我们将另行获得您的明确同意。</view>
            <view class="paragraph list-item">存储期限：我们仅在为提供本服务所必需的最短期限内保留您的个人信息。超出期限后，我们将对个人信息进行删除或匿名化处理。但法律法规另有规定（如《电子商务法》要求交易记录保存不少于三年）或您另行授权同意的除外。</view>
            <view class="paragraph list-item">安全措施：</view>
            <view class="paragraph list-item">技术层面：我们采用SSL/TLS加密传输、AES-256加密存储、去标识化处理、防火墙、入侵检测等主流安全技术。</view>
            <view class="paragraph list-item">制度层面：我们建立了数据安全管理制度，对员工进行权限隔离和保密培训，定期进行安全审计。</view>
            <view class="paragraph list-item">安全事件应对：如不幸发生个人信息安全事件，我们将按照法律法规要求，及时告知您并向监管机构报告。告知方式包括但不限于站内信、小程序公告、短信通知。</view>

            <view class="section-title">六、您的权利</view>

            <view class="paragraph">您可以通过以下方式管理您的个人信息：</view>

            <view class="paragraph">
                <text class="label">查询、更正、删除：</text>
            </view>
            <view class="paragraph list-item">进入“我的”->“个人信息”页，修改您的头像、昵称。</view>
            <view class="paragraph list-item">进入“我的”->“我的订单”页，查看并管理您的订单。</view>
            <view class="paragraph list-item">如需删除账户，请联系客服。删除后，我们将依据本协议第五条第2款处理您的信息。</view>

            <view class="paragraph">
                <text class="label">订单关联：</text>若您通过H5页面订购后订单未自动关联，可在“我的”页点击“订单关联”，输入手机号验证后手动关联。
            </view>

            <view class="paragraph">
                <text class="label">关闭包月服务：</text>进入“我的”->“包月服务”，选择对应服务后点击“关闭包月服务”。关闭后，次月起停止自动扣费。
            </view>

            <view class="paragraph">
                <text class="label">撤回同意：</text>您可通过删除信息、关闭功能、取消授权或注销账户的方式，撤回您的授权。撤回不影响撤回前基于您同意已进行的个人信息处理活动的效力。
            </view>

            <view class="paragraph">
                <text class="label">获取个人信息副本：</text>您有权通过客服获取您的个人信息副本。
            </view>

            <view class="paragraph">
                <text class="label">限制处理权与反对权：</text>您有权基于自身特殊情况，反对我们对您个人信息的处理（如个性化推荐）。您可在“我的”->“设置”中关闭个性化推荐。
            </view>

            <view class="section-title">七、未成年人信息的保护</view>

            <view
                class="paragraph"
            >本平台的服务主要面向成年人。如果您是18周岁以下的未成年人，请在您的父母或法定监护人的指导下阅读本协议，并在征得其同意的前提下使用我们的服务。如您是14周岁以下的儿童，我们仅在获得您父母或监护人明确同意的情况下处理您的信息。如果我们发现无意收集了未成年人的信息，将尽快删除。</view>

            <view class="section-title">八、本协议的更新</view>

            <view class="paragraph">我们可能适时修订本协议。对于重大变更（如收集信息的目的、方式变更、个人信息处理主体变更、您的主要权利变更等），我们将通过小程序弹窗、推送通知或短信等方式显著通知您。您有权选择是否同意更新后的协议。您继续使用服务，即视为同意修订后的协议。</view>

            <view class="section-title">九、免责声明</view>

            <view class="paragraph">在以下情况下，我们无需承担个人信息保护责任：</view>
            <view class="paragraph list-item">由于您主动将个人密码告知他人、与他人共享账户或主动泄露信息导致的损失。</view>
            <view class="paragraph list-item">因不可抗力、计算机病毒、黑客攻击、第三方服务商（如电信运营商）故障等非平台故意或重大过失造成的损失。</view>

            <view class="section-title">十、法律适用与争议解决</view>

            <view class="paragraph">本协议的订立、解释、执行及争议解决均适用中华人民共和国法律（不含冲突法）。因本协议产生的任何争议，您与我们应首先友好协商；协商不成的，任何一方均有权将争议提交至本平台运营方住所地有管辖权的人民法院诉讼解决。</view>

            <view class="section-title">十一、联系我们</view>

            <view class="paragraph">如您对本协议有任何疑问、意见或建议，或需行使您的权利，请联系我们：</view>
            <view class="paragraph list-item">
                <text class="label">客服邮箱：</text>kongzhongkefu@163.com
            </view>
            <view class="paragraph list-item">
                <text class="label">服务时间：</text>周一至周五 9:00 - 18:00
            </view>
        </view>
    </view>
</template>

<script setup>
const coreScenarios = [
    {
        function: '用户注册与账户登录',
        types: '微信昵称、头像、手机号码、OpenID/UnionID。',
        purpose: '创建唯一账户标识，实现用户身份识别，保障账户安全，并提供订单状态通知、到期提醒等服务。',
        basis: '履行合同所必需',
    },
    {
        function: '包月订购与支付签约',
        types: '姓名、身份证号码、银行卡号、银行预留手机号(敏感个人信息)。',
        purpose: '1. 完成您与银行/银联的身份验证与签约授权，确保系本人操作。\n2. 建立每月自动扣费的代收协议。',
        basis: '履行合同所必需',
    },
    {
        function: '订单生成与管理',
        types: '订购的产品名称、交易金额、订单编号、订购时间、支付状态。',
        purpose: '生成并管理您的订单，用于后续权益领取、退订、客服查询及纠纷处理。',
        basis: '履行合同所必需',
    },
    {
        function: '权益兑换',
        types: '您指定的第三方权益平台接收账号（通常为手机号）。',
        purpose: '根据您的明确指令，将您订购的权益产品（如视频会员、代金券）直充到您指定的账号中。',
        basis: '履行合同所必需',
    },
]

const extraScenarios = [
    {
        function: '产品推荐与优化',
        types: '页面浏览记录、点击记录、兑换记录、设备型号、操作系统版本、IP地址。',
        purpose: '优化首页“热门产品推荐”的算法，提升用户体验，进行业务统计分析。',
        basis: '合法利益（优化服务）',
    },
    {
        function: '客服与退订',
        types: '您主动提供的订单信息、联系方式、退订原因（如“权益不需要了”）、通话录音。',
        purpose: '核实身份、处理您的退订申请、解答咨询、记录投诉。',
        basis: '履行合同/合法利益',
    },
    {
        function: '安全保障',
        types: '日志信息、设备标识符、网络环境信息。',
        purpose: '防范欺诈、钓鱼、恶意攻击等安全风险，保障系统稳定。',
        basis: '履行法定义务',
    },
]

const sdkList = [
    {
        name: '微信小程序登录SDK',
        org: '腾讯',
        info: '微信头像、昵称、OpenID',
        purpose: '用户登录',
        link: '微信隐私保护指引',
    },
    {
        name: '银联支付SDK',
        org: '中国银联',
        info: '银行卡信息、交易信息',
        purpose: '支付签约',
        link: '银联用户隐私政策',
    },
]
</script>

<style lang="scss" scoped>
.page {
    min-height: 100vh;
    padding: 40rpx 32rpx 60rpx;
    box-sizing: border-box;
    background: #fff;
}

.doc-title {
    text-align: center;
    font-size: 36rpx;
    font-weight: bold;
    color: $--color-main;
    margin-bottom: 32rpx;
}

.doc-content {
    font-size: 28rpx;
    line-height: 1.8;
    color: $--color-common;
}

.meta-item {
    margin-bottom: 12rpx;
}

.paragraph {
    margin-bottom: 24rpx;
    text-align: justify;

    &:last-child {
        margin-bottom: 0;
    }
}

.label {
    font-weight: bold;
    color: $--color-main;
}

.section-title {
    font-size: 28rpx;
    font-weight: bold;
    color: $--color-main;
    margin: 32rpx 0 24rpx;
}

.sub-section-title {
    font-size: 28rpx;
    font-weight: bold;
    color: $--color-main;
    margin: 24rpx 0 16rpx;
}

.list-item {
    padding-left: 1em;
    position: relative;

    &::before {
        content: "•";
        position: absolute;
        left: 0;
    }
}

.table-card {
    border: 1rpx solid $--color-border;
    border-radius: 8rpx;
    overflow: hidden;
    margin-bottom: 24rpx;
}

.table-row {
    display: flex;
    border-bottom: 1rpx solid $--color-border;

    &:last-child {
        border-bottom: none;
    }
}

.table-label {
    flex-shrink: 0;
    width: 200rpx;
    padding: 20rpx 16rpx;
    font-weight: bold;
    color: $--color-main;
    background: #fafafa;
    border-right: 1rpx solid $--color-border;
    box-sizing: border-box;
    font-size: 24rpx;
    line-height: 1.6;
}

.table-value {
    flex: 1;
    padding: 20rpx 16rpx;
    color: $--color-common;
    box-sizing: border-box;
    font-size: 24rpx;
    line-height: 1.6;
    white-space: pre-wrap;
}
</style>
