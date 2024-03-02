interface DictionaryEntry {
    entry: string;
    explain: string;
}
interface Sentence {
    src: string;
    dst: string;
}
declare const formatDictReslut: (data: DictionaryEntry[]) => string;
declare const formatSentenceResult: (data: Sentence[]) => string;
export { formatDictReslut, formatSentenceResult };
