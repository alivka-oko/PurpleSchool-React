export interface IMovieDetails {
  short: Short;
  imdbId: string;
  top: Top;
  main: Main;
}

export interface Main {
  id: string;
  wins: ExternalLinks;
  nominationsExcludeWins: ExternalLinks;
  prestigiousAwardSummary: PrestigiousAwardSummary;
  ratingsSummary: RatingsSummary2;
  episodes?: any;
  videos: ExternalLinks;
  videoStrip: VideoStrip;
  titleMainImages: TitleMainImages;
  productionStatus: ProductionStatus;
  primaryImage: PrimaryImage;
  inIframeAddLink: PlotContributionLink;
  notInIframeAddLink: PlotContributionLink;
  titleType: TitleType2;
  cast: Cast;
  creators: any[];
  directors: Director[];
  writers: Director[];
  titleText: Node;
  originalTitleText: Node;
  canRate: CanRate;
  reviews: ExternalLinks;
  aggregateRatingsBreakdown: AggregateRatingsBreakdown;
  featuredReviews: FeaturedReviews2;
  reviewSummary: ReviewSummary;
  isAdult: boolean;
  moreLikeThisTitles: MoreLikeThisTitles;
  triviaTotal: ExternalLinks;
  trivia: Trivia;
  goofsTotal: ExternalLinks;
  goofs: Goofs;
  quotesTotal: ExternalLinks;
  quotes: Quotes;
  crazyCredits: Goofs;
  alternateVersions: AlternateVersions;
  connections: Connections;
  soundtrack: Soundtrack;
  topQuestions: TopQuestions;
  faqs: Faqs;
  releaseDate: ReleaseDate2;
  countriesDetails: CountriesDetails;
  detailsExternalLinks: DetailsExternalLinks;
  spokenLanguages: SpokenLanguages;
  akas: Akas;
  filmingLocations: FilmingLocations;
  production: Production;
  companies: ExternalLinks;
  productionBudget: ProductionBudget;
  lifetimeGross: LifetimeGross;
  openingWeekendGross: OpeningWeekendGross;
  worldwideGross: LifetimeGross;
  technicalSpecifications: TechnicalSpecifications;
  runtime: Runtime3;
  series?: any;
  contributionQuestions: ContributionQuestions;
  __typename: string;
}

export interface ContributionQuestions {
  contributionLink: PlotContributionLink;
  edges: any[];
  __typename: string;
}

export interface TechnicalSpecifications {
  soundMixes: SoundMixes;
  aspectRatios: AspectRatios;
  colorations: AspectRatios;
  __typename: string;
}

export interface AspectRatios {
  items: any[];
  __typename: string;
}

export interface SoundMixes {
  items: Item[];
  __typename: string;
}

export interface Item {
  id: string;
  text: string;
  attributes: any[];
  __typename: string;
}

export interface OpeningWeekendGross {
  gross: LifetimeGross;
  weekendEndDate: string;
  __typename: string;
}

export interface LifetimeGross {
  total: Budget;
  __typename: string;
}

export interface ProductionBudget {
  budget: Budget;
  __typename: string;
}

export interface Budget {
  amount: number;
  currency: string;
  __typename: string;
}

export interface FilmingLocations {
  edges: Edge21[];
  total: number;
  __typename: string;
}

export interface Edge21 {
  node: Node19;
  __typename: string;
}

export interface Node19 {
  text: string;
  location: string;
  attributes: Node[];
  __typename: string;
}

export interface Akas {
  edges: Edge[];
  __typename: string;
}

export interface SpokenLanguages {
  spokenLanguages: CurrentProductionStage[];
  __typename: string;
}

export interface DetailsExternalLinks {
  edges: Edge20[];
  total: number;
  __typename: string;
}

export interface Edge20 {
  node: Node18;
  __typename: string;
}

export interface Node18 {
  url: string;
  label: string;
  externalLinkRegion?: Node;
  __typename: string;
}

export interface CountriesDetails {
  countries: CurrentProductionStage[];
  __typename: string;
}

export interface ReleaseDate2 {
  day: number;
  month: number;
  year: number;
  country: CurrentProductionStage;
  __typename: string;
}

export interface Faqs {
  total: number;
  edges: Edge19[];
  __typename: string;
}

export interface Edge19 {
  node: Node17;
  __typename: string;
}

export interface Node17 {
  id: string;
  question: Value;
  __typename: string;
}

export interface TopQuestions {
  total: number;
  edges: Edge18[];
  __typename: string;
}

export interface Edge18 {
  node: Node16;
  __typename: string;
}

export interface Node16 {
  attributeId: string;
  question: Value;
  __typename: string;
}

export interface Soundtrack {
  edges: Edge17[];
  __typename: string;
}

export interface Edge17 {
  node: Node15;
  __typename: string;
}

export interface Node15 {
  text: string;
  comments: OriginalText[];
  __typename: string;
}

export interface Connections {
  edges: Edge16[];
  __typename: string;
}

export interface Edge16 {
  node: Node14;
  __typename: string;
}

export interface Node14 {
  associatedTitle: AssociatedTitle;
  category: Node;
  __typename: string;
}

export interface AssociatedTitle {
  id: string;
  releaseYear: ReleaseYear2;
  titleText: Node;
  originalTitleText: Node;
  series?: any;
  __typename: string;
}

export interface AlternateVersions {
  total: number;
  edges: Edge14[];
  __typename: string;
}

export interface Quotes {
  edges: Edge15[];
  __typename: string;
}

export interface Edge15 {
  node: Node13;
  __typename: string;
}

export interface Node13 {
  lines: Line[];
  __typename: string;
}

export interface Line {
  characters?: Character2[];
  text?: string;
  stageDirection?: string;
  __typename: string;
}

export interface Character2 {
  character: string;
  name: Language;
  __typename: string;
}

export interface Goofs {
  edges: Edge14[];
  __typename: string;
}

export interface Edge14 {
  node: Node12;
  __typename: string;
}

export interface Node12 {
  text: OriginalText;
  __typename: string;
}

export interface Trivia {
  edges: Edge13[];
  __typename: string;
}

export interface Edge13 {
  node: Node11;
  __typename: string;
}

export interface Node11 {
  text: OriginalText;
  trademark?: any;
  relatedNames?: any;
  __typename: string;
}

export interface MoreLikeThisTitles {
  edges: Edge12[];
  __typename: string;
}

export interface Edge12 {
  node: Node10;
  __typename: string;
}

export interface Node10 {
  id: string;
  titleText: Node;
  titleType: TitleType3;
  originalTitleText: Node;
  primaryImage: PrimaryImage;
  releaseYear: ReleaseYear;
  ratingsSummary: RatingsSummary;
  runtime: Runtime3;
  certificate: Certificate;
  canRate: CanRate;
  titleGenres: TitleGenres;
  __typename: string;
}

export interface Runtime3 {
  seconds: number;
  __typename: string;
}

export interface TitleType3 {
  id: string;
  text: string;
  canHaveEpisodes: boolean;
  displayableProperty: DisplayableProperty;
  __typename: string;
}

export interface ReviewSummary {
  overall: Overall;
  themes: Theme[];
  __typename: string;
}

export interface Theme {
  themeId: string;
  label: Category;
  sentiment: string;
  __typename: string;
}

export interface Overall {
  medium: Medium;
  __typename: string;
}

export interface Medium {
  value: OriginalText;
  __typename: string;
}

export interface FeaturedReviews2 {
  edges: Edge11[];
  __typename: string;
}

export interface Edge11 {
  node: Node9;
  __typename: string;
}

export interface Node9 {
  id: string;
  author: Author3;
  summary: Summary;
  text: Text2;
  title: Language;
  authorRating: number;
  __typename: string;
}

export interface Text2 {
  originalText: OriginalText;
  __typename: string;
}

export interface OriginalText {
  plaidHtml: string;
  __typename: string;
}

export interface Author3 {
  userId: string;
  username: Node;
  __typename: string;
}

export interface AggregateRatingsBreakdown {
  histogram: Histogram;
  __typename: string;
}

export interface Histogram {
  histogramValues: HistogramValue[];
  __typename: string;
}

export interface HistogramValue {
  rating: number;
  voteCount: number;
  __typename: string;
}

export interface Director {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Node4[];
  __typename: string;
}

export interface Cast {
  total: number;
  edges: Edge10[];
  __typename: string;
}

export interface Edge10 {
  node: Node8;
  __typename: string;
}

export interface Node8 {
  name: Name3;
  attributes?: Node[];
  category: CurrentProductionStage;
  characters: Character[];
  episodeCredits: EpisodeCredits;
  __typename: string;
}

export interface EpisodeCredits {
  total: number;
  yearRange?: any;
  __typename: string;
}

export interface Character {
  name: string;
  __typename: string;
}

export interface Name3 {
  id: string;
  nameText: Node;
  primaryImage: Thumbnail2;
  __typename: string;
}

export interface TitleType2 {
  id: string;
  canHaveEpisodes: boolean;
  __typename: string;
}

export interface TitleMainImages {
  total: number;
  edges: Edge9[];
  __typename: string;
}

export interface Edge9 {
  node: PrimaryImage;
  __typename: string;
}

export interface VideoStrip {
  edges: Edge8[];
  __typename: string;
}

export interface Edge8 {
  node: Node7;
  __typename: string;
}

export interface Node7 {
  id: string;
  contentType: ContentType2;
  name: Category;
  runtime: Runtime2;
  thumbnail: Thumbnail2;
  __typename: string;
}

export interface ContentType2 {
  displayName: Category;
  __typename: string;
}

export interface RatingsSummary2 {
  topRanking: TopRanking;
  __typename: string;
  aggregateRating: number;
  voteCount: number;
  notificationText?: any;
}

export interface TopRanking {
  id: string;
  text: Category;
  rank: number;
  __typename: string;
}

export interface PrestigiousAwardSummary {
  nominations: number;
  wins: number;
  award: Award;
  __typename: string;
}

export interface Award {
  text: string;
  id: string;
  event: Language;
  __typename: string;
}

export interface Top {
  id: string;
  productionStatus: ProductionStatus;
  externalLinks: ExternalLinks;
  metacritic: Metacritic;
  keywords: Keywords;
  credits: ExternalLinks;
  engagementStatistics: EngagementStatistics;
  titleText: Node;
  titleType: TitleType;
  originalTitleText: Node;
  certificate: Certificate;
  releaseYear: ReleaseYear;
  releaseDate: ReleaseDate;
  runtime: Runtime;
  canRate: CanRate;
  ratingsSummary: RatingsSummary;
  meterRanking: MeterRanking;
  series?: any;
  isAdult: boolean;
  genres: Genres;
  interests: Interests;
  plot: Plot;
  plotContributionLink: PlotContributionLink;
  primaryImage: PrimaryImage;
  images: Images;
  videos: ExternalLinks;
  primaryVideos: PrimaryVideos;
  principalCredits: PrincipalCredit[];
  reviews: ExternalLinks;
  criticReviewsTotal: ExternalLinks;
  triviaTotal: ExternalLinks;
  subNavCredits: ExternalLinks;
  subNavReviews: ExternalLinks;
  subNavTrivia: ExternalLinks;
  subNavFaqs: ExternalLinks;
  subNavTopQuestions: ExternalLinks;
  titleGenres: TitleGenres;
  meta: Meta;
  castPageTitle: CastPageTitle;
  creatorsPageTitle: any[];
  directorsPageTitle: DirectorsPageTitle[];
  countriesOfOrigin: CountriesOfOrigin;
  production: Production;
  featuredReviews: FeaturedReviews;
  __typename: string;
}

export interface FeaturedReviews {
  edges: Edge7[];
  __typename: string;
}

export interface Edge7 {
  node: Node6;
  __typename: string;
}

export interface Node6 {
  author: Author2;
  summary: Summary;
  text: Text;
  authorRating: number;
  submissionDate: string;
  __typename: string;
}

export interface Text {
  originalText: Value;
  __typename: string;
}

export interface Summary {
  originalText: string;
  __typename: string;
}

export interface Author2 {
  nickName: string;
  __typename: string;
}

export interface Production {
  edges: Edge6[];
  __typename: string;
}

export interface Edge6 {
  node: Node5;
  __typename: string;
}

export interface Node5 {
  company: Company;
  __typename: string;
}

export interface Company {
  id: string;
  companyText: Node;
  __typename: string;
}

export interface CountriesOfOrigin {
  countries: Language[];
  __typename: string;
}

export interface DirectorsPageTitle {
  credits: Node4[];
  __typename: string;
}

export interface CastPageTitle {
  edges: Edge5[];
  __typename: string;
}

export interface Edge5 {
  node: Node4;
  __typename: string;
}

export interface Node4 {
  name: Name2;
  __typename: string;
}

export interface Meta {
  canonicalId: string;
  publicationStatus: string;
  __typename: string;
}

export interface TitleGenres {
  genres: Genre[];
  __typename: string;
}

export interface Genre {
  genre: Node;
  __typename: string;
}

export interface PrincipalCredit {
  totalCredits: number;
  category: CurrentProductionStage;
  credits: Credit[];
  __typename: string;
}

export interface Credit {
  name: Name2;
  attributes?: any;
  __typename: string;
}

export interface Name2 {
  nameText: Node;
  id: string;
  __typename: string;
}

export interface PrimaryVideos {
  edges: Edge4[];
  __typename: string;
}

export interface Edge4 {
  node: Node3;
  __typename: string;
}

export interface Node3 {
  id: string;
  createdDate: string;
  isMature: boolean;
  runtime: Runtime2;
  name: Name;
  description: Name;
  timedTextTracks: any[];
  recommendedTimedTextTrack?: any;
  thumbnail: Thumbnail2;
  primaryTitle: PrimaryTitle;
  playbackURLs: PlaybackURL[];
  contentType: ContentType;
  previewURLs: PlaybackURL[];
  __typename: string;
}

export interface ContentType {
  id: string;
  displayName: Category;
  __typename: string;
}

export interface PlaybackURL {
  displayName: Name;
  videoMimeType: string;
  videoDefinition: string;
  url: string;
  __typename: string;
}

export interface PrimaryTitle {
  id: string;
  titleText: Node;
  originalTitleText: Node;
  releaseYear: ReleaseYear2;
  __typename: string;
}

export interface ReleaseYear2 {
  year: number;
  __typename: string;
}

export interface Thumbnail2 {
  url: string;
  height: number;
  width: number;
  __typename: string;
}

export interface Name {
  value: string;
  language: string;
  __typename: string;
}

export interface Runtime2 {
  value: number;
  __typename: string;
}

export interface Images {
  total: number;
  edges: Edge3[];
  __typename: string;
}

export interface Edge3 {
  node: Language;
  __typename: string;
}

export interface PrimaryImage {
  id: string;
  width: number;
  height: number;
  url: string;
  caption: Value;
  __typename: string;
}

export interface PlotContributionLink {
  url: string;
  __typename: string;
}

export interface Plot {
  plotText: Value;
  language: Language;
  __typename: string;
}

export interface Language {
  id: string;
  __typename: string;
}

export interface Interests {
  edges: Edge2[];
  __typename: string;
}

export interface Edge2 {
  node: Node2;
  __typename: string;
}

export interface Node2 {
  id: string;
  primaryText: Node;
  __typename: string;
}

export interface Genres {
  genres: CurrentProductionStage[];
  __typename: string;
}

export interface MeterRanking {
  currentRank: number;
  rankChange: RankChange;
  __typename: string;
}

export interface RankChange {
  changeDirection: string;
  difference: number;
  __typename: string;
}

export interface RatingsSummary {
  aggregateRating: number;
  voteCount: number;
  __typename: string;
}

export interface CanRate {
  isRatable: boolean;
  __typename: string;
}

export interface Runtime {
  seconds: number;
  displayableProperty: DisplayableProperty;
  __typename: string;
}

export interface ReleaseDate {
  day: number;
  month: number;
  year: number;
  country: Node;
  __typename: string;
}

export interface ReleaseYear {
  year: number;
  endYear?: any;
  __typename: string;
}

export interface Certificate {
  rating: string;
  __typename: string;
}

export interface TitleType {
  displayableProperty: DisplayableProperty;
  text: string;
  id: string;
  isSeries: boolean;
  isEpisode: boolean;
  categories: Category[];
  canHaveEpisodes: boolean;
  __typename: string;
}

export interface Category {
  value: string;
  __typename: string;
}

export interface DisplayableProperty {
  value: Value;
  __typename: string;
}

export interface Value {
  plainText: string;
  __typename: string;
}

export interface EngagementStatistics {
  watchlistStatistics: WatchlistStatistics;
  __typename: string;
}

export interface WatchlistStatistics {
  displayableCount: Node;
  __typename: string;
}

export interface Keywords {
  total: number;
  edges: Edge[];
  __typename: string;
}

export interface Edge {
  node: Node;
  __typename: string;
}

export interface Node {
  text: string;
  __typename: string;
}

export interface Metacritic {
  metascore: Metascore;
  __typename: string;
}

export interface Metascore {
  score: number;
  __typename: string;
}

export interface ExternalLinks {
  total: number;
  __typename: string;
}

export interface ProductionStatus {
  currentProductionStage: CurrentProductionStage;
  productionStatusHistory: ProductionStatusHistory[];
  restriction?: any;
  __typename: string;
}

export interface ProductionStatusHistory {
  status: CurrentProductionStage;
  __typename: string;
}

export interface CurrentProductionStage {
  id: string;
  text: string;
  __typename: string;
}

export interface Short {
  '@context': string;
  '@type': string;
  url: string;
  name: string;
  image: string;
  description: string;
  review: Review;
  aggregateRating: AggregateRating;
  contentRating: string;
  genre: string[];
  datePublished: string;
  keywords: string;
  trailer: Trailer;
  actor: Actor[];
  director: Actor[];
  creator: Creator[];
  duration: string;
}

export interface Creator {
  '@type': string;
  url: string;
  name?: string;
}

export interface Actor {
  '@type': string;
  url: string;
  name: string;
}

export interface Trailer {
  '@type': string;
  name: string;
  embedUrl: string;
  thumbnail: Thumbnail;
  thumbnailUrl: string;
  url: string;
  description: string;
  duration: string;
  uploadDate: string;
}

export interface Thumbnail {
  '@type': string;
  contentUrl: string;
}

export interface AggregateRating {
  '@type': string;
  ratingCount: number;
  bestRating: number;
  worstRating: number;
  ratingValue: number;
}

export interface Review {
  '@type': string;
  itemReviewed: ItemReviewed;
  author: Author;
  dateCreated: string;
  inLanguage: string;
  name: string;
  reviewBody: string;
  reviewRating: ReviewRating;
}

export interface ReviewRating {
  '@type': string;
  worstRating: number;
  bestRating: number;
  ratingValue: number;
}

export interface Author {
  '@type': string;
  name: string;
}

export interface ItemReviewed {
  '@type': string;
  url: string;
}
