import XCTest
import SwiftTreeSitter
import TreeSitterTreeSitterFasm2

final class TreeSitterTreeSitterFasm2Tests: XCTestCase {
    func testCanLoadGrammar() throws {
        let parser = Parser()
        let language = Language(language: tree_sitter_tree_sitter_fasm2())
        XCTAssertNoThrow(try parser.setLanguage(language),
                         "Error loading TreeSitterFasm2 grammar")
    }
}
