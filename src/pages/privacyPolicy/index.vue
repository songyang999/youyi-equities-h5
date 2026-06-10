<template>
    <view class="page">
        <view class="doc-title">权益平台隐私保护协议</view>

        <view class="doc-content">
            <view class="meta-item"><text class="label">版本号：</text>V1.0</view>
            <view class="meta-item"><text class="label">制定日期：</text>2026年6月3日</view>
            <view class="meta-item"><text class="label">生效日期：</text>2026年6月10日</view>
            <view class="meta-item label">尊敬的用户：</view>

            <view class="paragraph">
                "新锐权益宝"（以下简称"本平台"或"我们"）深知个人信息对您的重要性，我们秉承"合法、正当、必要、诚信"的原则，采取严格的安全措施保护您的个人信息。本协议旨在向您清晰、详尽地说明我们如何收集、使用、存储、共享、转让及保护您的个人信息，以及您如何管理您的个人信息。
            </view>

            <view class="paragraph">
                请您在点击"同意"或使用我们的服务前，务必审慎阅读并充分理解本协议的全部条款。特别是以加粗、下划线或标红等方式提示您注意的条款。如您对本协议有任何疑问，可通过本协议末尾的联系方式与我们联系。
            </view>

            <view class="paragraph">
                您主动点击"同意"或通过"勾选同意"的方式确认本协议，即表示您已完全理解并同意本协议的全部内容，并授权我们按照本协议处理您的个人信息。如您不同意本协议的任何内容，请您立即停止使用本平台的服务。
            </view>

            <view class="section-title">一、定义</view>

            <view class="paragraph">1.个人信息：指以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。</view>
            <view class="paragraph">2.敏感个人信息：指一旦泄露或者非法使用，容易导致自然人的人格尊严受到侵害或者人身、财产安全受到危害的个人信息，包括但不限于生物识别、宗教信仰、特定身份、医疗健康、金融账户、行踪轨迹等信息。在本平台服务中，您提供的身份证号码及银行卡号属于敏感个人信息。</view>
            <view class="paragraph">3.权益平台服务：指由我们运营的，提供权益产品展示、订购、支付、兑换、管理等功能的小程序及关联H5页面。</view>
            <view class="paragraph">4.关联公司：指控制、受控于本平台运营方或与本平台运营方共同受控制的其他实体。</view>

            <view class="section-title">二、我们如何收集和使用您的个人信息</view>

            <view class="sub-section-title">（一）核心业务场景</view>

            <view class="paragraph">
                为实现以下核心业务功能，我们需要收集和使用您的个人信息。若您拒绝提供，将无法使用相应的核心业务功能，但不影响您使用本平台的基础浏览功能。
            </view>

            <view v-for="(item, index) in coreScenarios" :key="'core-' + index" class="table-card">
                <view class="table-row">
                    <view class="table-label">业务功能</view>
                    <view class="table-value">{{ item.function }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">我们处理的个人信息类型</view>
                    <view class="table-value">{{ item.types }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">我们处理该信息的目的</view>
                    <view class="table-value">{{ item.purpose }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">法律依据</view>
                    <view class="table-value">{{ item.basis }}</view>
                </view>
            </view>

            <view class="sub-section-title">（二）附加业务场景</view>

            <view class="paragraph">
                为提升您的服务体验，在以下附加业务场景中，我们可能会收集和使用您的个人信息。您可以选择是否授权，拒绝授权不会影响核心业务功能的使用，但可能无法享受相应的附加服务。
            </view>

            <view v-for="(item, index) in extraScenarios" :key="'extra-' + index" class="table-card">
                <view class="table-row">
                    <view class="table-label">业务功能</view>
                    <view class="table-value">{{ item.function }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">我们处理的个人信息类型</view>
                    <view class="table-value">{{ item.types }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">我们处理该信息的目的</view>
                    <view class="table-value">{{ item.purpose }}</view>
                </view>
                <view class="table-row">
                    <view class="table-label">法律依据</view>
                    <view class="table-value">{{ item.basis }}</view>
                </view>
            </view>

            <view class="section-title">三、我们如何使用Cookie和同类技术</view>

            <view class="paragraph">
                为实现本平台正常运转、保障账户安全及优化服务体验，我们可能会在您的设备上存储名为 Cookie 的小数据文件，或使用网站信标、像素标签等同类技术。Cookie通常包含标识符、站点名称以及一些号码和字符。借助于Cookie及同类技术，我们能够：
            </view>

            <view class="paragraph list-item">记住您的登录状态，免去您重复登录的麻烦；</view>
            <view class="paragraph list-item">了解您的使用习惯，以便为您提供更加个性化的服务；</view>
            <view class="paragraph list-item">统计和分析产品使用情况，以不断优化和改进我们的服务。</view>

            <view class="paragraph">
                您可以根据自己的偏好管理或删除Cookie。但请注意，如果停用Cookie，您可能无法享受最佳的服务体验，某些服务也可能无法正常使用。
            </view>

            <view class="section-title">四、我们如何共享、转让、公开披露您的个人信息</view>

            <view class="sub-section-title">（一）共享</view>

            <view class="paragraph">我们不会与任何公司、组织和个人共享您的个人信息，但以下情况除外：</view>
            <view class="paragraph">1. 与关联公司共享：为便于我们基于统一的账号体系向您提供一致化的服务，您的个人信息可能会与我们的关联公司共享。我们只会共享必要的个人信息，且受本协议约束。</view>
            <view class="paragraph">2. 与授权合作伙伴共享：我们可能会委托授权合作伙伴（如支付机构、短信服务商、实名认证服务商）为您提供某些服务。我们仅会出于合法、正当、必要、特定、明确的目的共享您的个人信息，并且只会共享提供服务所必要的信息。</view>
            <view class="paragraph">3. 法定情形下的共享：根据法律法规规定、诉讼争议解决需要，或按行政、司法机关依法提出的要求，我们可能会共享您的个人信息。</view>

            <view class="sub-section-title">（二）转让</view>

            <view class="paragraph">我们不会将您的个人信息转让给任何公司、组织和个人，但以下情况除外：</view>
            <view class="paragraph">1. 获得您的明确同意；</view>
            <view class="paragraph">2. 在涉及合并、收购、资产转让或类似的交易时，如涉及到个人信息转让，我们会要求新的持有您个人信息的公司、组织继续受本协议的约束，否则我们将要求该公司、组织重新向您征求授权同意。</view>

            <view class="sub-section-title">（三）公开披露</view>

            <view class="paragraph">我们仅会在以下情况下，公开披露您的个人信息：</view>
            <view class="paragraph">1. 获得您的明确同意或基于您的主动选择；</view>
            <view class="paragraph">2. 基于法律法规、法律程序、诉讼或政府主管部门的强制性要求。</view>

            <view class="section-title">五、我们如何保护您的个人信息</view>

            <view class="paragraph">1. 我们已采用符合业界标准的安全防护措施（包括技术和管理方面）来保护您提供的个人信息，防止数据遭到未经授权的访问、公开披露、使用、修改、损坏或丢失。例如，我们对传输的敏感个人信息进行加密保护；对存储的个人信息进行去标识化处理；严格限制能够访问个人信息的人员范围，并进行审计。</view>
            <view class="paragraph">2. 我们建立了数据安全管理制度，并对员工进行安全和隐私保护培训，加强员工对于保护个人信息重要性的认识。</view>
            <view class="paragraph">3. 如发生个人信息安全事件，我们将按照法律法规的要求，及时向您告知：安全事件的基本情况和可能的影响、我们已采取或将要采取的处置措施、您可自主防范和降低风险的建议、对您的补救措施等。我们将及时将事件相关情况以邮件、信函、电话、推送通知等方式告知您，难以逐一告知个人信息主体时，我们会采取合理、有效的方式发布公告。</view>

            <view class="section-title">六、您的权利</view>

            <view class="paragraph">按照中国相关的法律、法规、标准，以及其他国家、地区的通行做法，我们保障您对自己的个人信息行使以下权利：</view>

            <view class="paragraph">
                <text class="label">1. 查询、更正、补充您的个人信息</text>
                您可以通过本平台提供的功能自行查询、更正或补充您的账户信息。
            </view>

            <view class="paragraph">
                <text class="label">2. 删除您的个人信息</text>
                在以下情形中，您可以向我们提出删除个人信息的请求：
            </view>
            <view class="paragraph list-item">如果我们处理个人信息的行为违反法律法规；</view>
            <view class="paragraph list-item">如果我们收集、使用您的个人信息，却未征得您的同意；</view>
            <view class="paragraph list-item">如果我们处理个人信息的行为违反了与您的约定；</view>
            <view class="paragraph list-item">如果您不再使用我们的产品或服务，或您注销了账号；</view>
            <view class="paragraph list-item">如果我们不再为您提供产品或服务。</view>

            <view class="paragraph">
                <text class="label">3. 改变您授权同意的范围</text>
                您可以随时给予或收回您的授权同意。当您收回同意后，我们将不再处理相应的个人信息。但您收回同意的决定，不会影响此前基于您的授权而开展的个人信息处理。
            </view>

            <view class="paragraph">
                <text class="label">4. 注销您的账户</text>
                您随时可注销此前注册的账户。在注销账户之后，我们将停止为您提供产品或服务，并依据您的要求，删除您的个人信息，法律法规另有规定的除外。
            </view>

            <view class="paragraph">
                <text class="label">5. 获取个人信息副本</text>
                您有权获取您的个人信息副本。在技术可行的前提下，例如数据接口匹配，我们还可按您的要求，直接将您的个人信息副本传输给您指定的第三方。
            </view>

            <view class="paragraph">
                <text class="label">6. 响应您的上述请求</text>
                为保障安全，您可能需要提供书面请求，或以其他方式证明您的身份。我们可能会先要求您验证自己的身份，然后再处理您的请求。对于您合理的请求，我们原则上不收取费用，但对多次重复、超出合理限度的请求，我们将视情收取一定成本费用。我们将在15个工作日内做出答复。
            </view>

            <view class="section-title">七、未成年人保护</view>

            <view class="paragraph">
                我们的产品、网站和服务主要面向成人。如果没有父母或监护人的同意，未成年人不应创建自己的用户账户。对于经父母或监护人同意而收集未成年人个人信息的情况，我们只会在受到法律允许、父母或监护人明确同意或者保护未成年人所必要的情况下使用或公开披露此信息。
            </view>

            <view class="section-title">八、本政策的更新</view>

            <view class="paragraph">
                我们的隐私保护协议可能适时发生变更。未经您明确同意，我们不会削减您按照本协议所应享有的权利。我们会在本页面上发布对本协议所做的任何变更。
            </view>
            <view class="paragraph">
                对于重大变更，我们还会提供更为显著的通知（包括对于某些服务，我们会通过小程序公告或推送通知的方式，说明隐私协议的具体变更内容）。
            </view>

            <view class="section-title">九、如何联系我们</view>

            <view class="paragraph">
                如果您对本协议有任何疑问、意见或建议，或需要行使您的相关权利，可通过以下方式与我们联系：
            </view>
            <view class="paragraph"><text class="label">客服电话：</text>400-618-8866</view>
            <view class="paragraph"><text class="label">电子邮箱：</text>service@xinruihy.com</view>
            <view class="paragraph"><text class="label">联系地址：</text>北京市朝阳区建国路93号万达中心A座</view>
        </view>
    </view>
</template>

<script setup>
const coreScenarios = [
    {
        function: '注册与身份验证',
        types: '手机号码、验证码、姓名、身份证号码',
        purpose: '用于为您创建账户、完成登录及身份核验，以确保您能正常使用我们的服务',
        basis: '为订立和履行您作为一方当事人的合同所必需',
    },
    {
        function: '权益产品订购与履约',
        types: '订单信息（产品名称、金额、订单号）、支付信息（支付渠道、支付流水号）、手机号码',
        purpose: '用于处理您的订单、完成支付、向您交付所订购的权益产品',
        basis: '为订立和履行您作为一方当事人的合同所必需',
    },
    {
        function: '权益领取与使用',
        types: '手机号码、权益兑换码或使用记录',
        purpose: '用于验证您的权益资格、记录权益使用情况，并向您提供相关的客户服务',
        basis: '为订立和履行您作为一方当事人的合同所必需',
    },
]

const extraScenarios = [
    {
        function: '客户服务与投诉处理',
        types: '您主动提供的联系方式、问题描述及相关凭证',
        purpose: '用于响应您的咨询、投诉和建议，解决您在使用服务过程中遇到的问题',
        basis: '为订立和履行您作为一方当事人的合同所必需',
    },
    {
        function: '安全风控与纠纷处理',
        types: '设备信息、日志信息、网络身份信息',
        purpose: '用于保障账户和交易安全，防范欺诈等违法行为，处理纠纷',
        basis: '为履行法定职责或法定义务所必需',
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
        content: '•';
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
}
</style>
