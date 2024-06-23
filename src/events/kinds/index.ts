export enum NOSTRKind {
    Metadata = 0,
    Text = 1,
    RecommendRelay = 2,
    Contacts = 3,
    EncryptedDirectMessage = 4,
    EventDeletion = 5,
    Repost = 6,
    Reaction = 7,
    BadgeAward = 8,

    // NIP-29
    GroupChat = 9,
    GroupNote = 11,
    GroupReply = 12,

    GenericRepost = 16,
    ChannelCreation = 40,
    ChannelMetadata = 41,
    ChannelMessage = 42,
    ChannelHideMessage = 43,
    ChannelMuteUser = 44,
    Media = 1063,
    Report = 1984,
    Label = 1985,

    // NIP-90: Data Vending Machines
    DVMReqTextExtraction = 5000,
    DVMReqTextSummarization = 5001,
    DVMReqTextTranslation = 5002,
    DVMReqTextGeneration = 5050,
    DVMReqImageGeneration = 5100,
    DVMReqDiscoveryNostrContent = 5300,
    DVMReqDiscoveryNostrPeople = 5301,
    DVMReqTimestamping = 5900,
    DVMEventSchedule = 5905,
    DVMJobFeedback = 7000,

    // Recurring payments
    Subscribe = 7001,
    Unsubscribe = 7002,
    SubscriptionReceipt = 7003,

    // NIP-29
    GroupAdminAddUser = 9000,
    GroupAdminRemoveUser = 9001,
    GroupAdminEditMetadata = 9002,
    GroupAdminEditStatus = 9006,

    // Lists and Sets
    MuteList = 10000,
    PinList = 10001,
    RelayList = 10002,
    BookmarkList = 10003,
    CommunityList = 10004,
    PublicChatList = 10005,
    BlockRelayList = 10006,
    SearchRelayList = 10007,
    SimpleGroupList = 10009,
    InterestList = 10015,
    EmojiList = 10030,
    BlossomList = 10063,
    NostrWaletConnectInfo = 13194,
    TierList = 17000,
    FollowSet = 30000,
    CategorizedPeopleList = 30000, // Deprecated but left for backwards compatibility
    CategorizedBookmarkList = 30001, // Deprecated but left for backwards compatibility
    RelaySet = 30002,
    CategorizedRelayList = 30002, // Deprecated but left for backwards compatibility
    BookmarkSet = 30003,
    CurationSet = 30004, // Deprecated but left for backwards compatibility
    ArticleCurationSet = 30004,
    VideoCurationSet = 30005,
    InterestSet = 30015,
    InterestsList = 30015, // Deprecated but left for backwards compatibility
    EmojiSet = 30030,
    Draft = 31234,
    SubscriptionTier = 37001,
    HighlightSet = 39802,
    CategorizedHighlightList = 39802, // Deprecated but left for backwards compatibility

    ZapRequest = 9734,
    Zap = 9735,
    Highlight = 9802,
    ClientAuth = 22242,
    NostrWalletConnectReq = 23194,
    NostrWalletConnectRes = 23195,
    NostrConnect = 24133,
    BlossomUpload = 24242,
    HttpAuth = 27235,
    ProfileBadge = 30008,
    BadgeDefinition = 30009,
    MarketStall = 30017,
    MarketProduct = 30018,
    Article = 30023,
    AppSpecificData = 30078,
    Classified = 30402,
    HorizontalVideo = 34235,
    GroupMetadata = 39000, // NIP-29
    GroupMembers = 39002, // NIP-29

    // NIP-89: App Metadata
    AppRecommendation = 31989,
    AppHandler = 31990,
}

export const NOSTRListKinds = [
    NOSTRKind.MuteList,
    NOSTRKind.PinList,
    NOSTRKind.RelayList,
    NOSTRKind.BookmarkList,
    NOSTRKind.CommunityList,
    NOSTRKind.PublicChatList,
    NOSTRKind.BlockRelayList,
    NOSTRKind.SearchRelayList,
    NOSTRKind.InterestList,
    NOSTRKind.EmojiList,
    NOSTRKind.FollowSet,
    NOSTRKind.BookmarkSet,
    NOSTRKind.CategorizedBookmarkList, // Backwards compatibility
    NOSTRKind.RelaySet,
    NOSTRKind.ArticleCurationSet,
    NOSTRKind.VideoCurationSet,
    NOSTRKind.InterestSet,
    NOSTRKind.EmojiSet,
    NOSTRKind.HighlightSet,
];
